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

module.exports = {
  findProjects,
  addProjects,
  removeProjects,
  addTask,
  getTasks,
};
