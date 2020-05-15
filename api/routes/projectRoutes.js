const express = require("express");
const router = express.Router();
const projectCtrl = require("../controllers/projectController");

//GET - gets all projects;
router.route("/").get(projectCtrl.getProjects);
//POST - add a project
router.route("/").post(projectCtrl.addProject);
//DELETE- removes project
router.route("/:projectId").delete(projectCtrl.deleteProject);
//POST - add a task
router.route("/:projectId/tasks").post(projectCtrl.addTask);
//GET - gets all tasks for specific project
router.route("/:projectId/tasks").get(projectCtrl.getTasks);
module.exports = router;
