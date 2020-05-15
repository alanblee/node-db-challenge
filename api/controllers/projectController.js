const Data = require("./helpers/projectHelper");

//get projects
module.exports.getProjects = async (req, res) => {
  try {
    const allProjects = await Data.findProjects();
    res.status(200).json(allProjects);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get projects",
      err: err.message,
    });
  }
};

//add project
module.exports.addProject = async (req, res) => {
  const { project_name, description } = req.body;
  if (!project_name) {
    res.status(400).json({ message: "Please provide a name for this project" });
  }
  try {
    const projectInfo = {
      project_name,
      description,
    };
    const newProject = await Data.addProjects(projectInfo);
    if (newProject.length) {
      res
        .status(201)
        .json({ success: `Project added with id ${newProject[0]}` });
    } else {
      res.status(400).json({ message: "Could not add project." });
    }
  } catch (err) {
    res.status(500).json({
      message: "Failed to add project",
      err: err.message,
    });
  }
};

//remove project
module.exports.deleteProject = async (req, res) => {
  const projectId = Number(req.params.projectId);
  try {
    const removedProject = await Data.removeProjects(projectId);
    if (removedProject.length > 0) {
      res.status(200).json({ removedId: removedProject[0] });
    } else {
      res
        .status(400)
        .json({ message: "Could not remove the project with that id" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete project", err: err.message });
  }
};

//add task
module.exports.addTask = async (req, res) => {
  const projectId = Number(req.params.projectId);
  const { instructions, notes, completed } = req.body;
  if (!instructions) {
    res
      .status(400)
      .json({ message: "Please provide the instructions for this task" });
  }
  try {
    const taskInfo = {
      instructions,
      notes,
      completed,
    };
    const newTask = await Data.addTask(taskInfo, projectId);
    if (newTask.length) {
      res.status(201).json({ success: `Task added with id ${newTask[0]}` });
    } else {
      res.status(400).json({ message: "Could not add task." });
    }
  } catch (err) {
    res.status(500).json({
      message: "Failed to add task",
      err: err.message,
    });
  }
};

//get tasks
module.exports.getTasks = async (req, res) => {
  const projectId = Number(req.params.projectId);
  try {
    const allTasks = await Data.getTasks(projectId);
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get tasks",
      err: err.message,
    });
  }
};

//get single project
module.exports.getSingleProject = async (req, res) => {
  const projectId = Number(req.params.projectId);
  try {
    const projectDetails = await Data.findProjectById(projectId);
    if (projectDetails.length) {
      res.status(200).json(projectDetails);
    } else {
      res.status(404).json({ message: "Cannot find project with that id" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Failed to get project by id",
      err: err.message,
    });
  }
};
