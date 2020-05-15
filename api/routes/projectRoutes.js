const express = require("express");
const router = express.Router();
const projectCtrl = require("../controllers/projectController");

//GET - gets all resources;
router.route("/").get(projectCtrl.getProjects);
//POST - add a resource
router.route("/").post(projectCtrl.addProject);
//DELEte - removes resource
router.route("/:projectId").delete(projectCtrl.deleteProject);

module.exports = router;
