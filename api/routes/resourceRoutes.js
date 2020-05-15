const express = require("express");
const router = express.Router();
const resourceCtrl = require("../controllers/resourceController");

//GET - gets all resources;
router.route("/").get(resourceCtrl.getResources);
//POST - add a resource
router.route("/").post(resourceCtrl.addResource);
//DELEte - removes resource
router.route("/:resourceId").delete(resourceCtrl.deleteResource);

module.exports = router;
