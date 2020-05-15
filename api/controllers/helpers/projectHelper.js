const db = require("../../../data/dataConfig");

const findProjects = () => {
  return db("projects");
};

const addProjects = (resource) => {
  return db("projects").returning("id").insert(resource);
};

const removeProjects = (resourceId) => {
  return db("projects").where({ id: resourceId }).returning("id").del();
};

const addTask = (task, projectId) => {
  const taskData = {
    ...task,
    project_id: projectId,
  };
  return db("tasks").returning("id").insert(taskData);
};

const getTasks = (projectId) => {
  return db("tasks")
    .select(
      "tasks.id",
      "tasks.notes",
      "tasks.instructions",
      "tasks.completed",
      "projects.project_name",
      "projects.description"
    )
    .join("projects", "projects.id", "=", "tasks.project_id")
    .where("tasks.project_id", projectId);
};

const findProjectById = async (projectId) => {
  const foundProject = await db("projects").where({ id: projectId }).first();
  const projectTasks = await db("tasks").where({ project_id: projectId });
  const projectResources = await db("resources")
    .join(
      "project_resources",
      "project_resources.resource_id",
      "=",
      "resources.id"
    )
    .where("project_resources.project_id", projectId);
  return {
    ...foundProject,
    tasks: projectTasks.map((task) => {
      return {
        id: task.id,
        instructions: task.instructions,
        notes: task.notes,
        completed: task.completed,
      };
    }),
    resources: projectResources.map((resource) => {
      return {
        id: resource.resource_id,
        name: resource.resource_name,
        description: resource.description,
      };
    }),
  };
};

module.exports = {
  findProjects,
  addProjects,
  removeProjects,
  addTask,
  getTasks,
  findProjectById,
};
