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
