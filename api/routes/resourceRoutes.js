const express = require("express");
const router = express.Router();
const resourceCtrl = require("../controllers/resourceController");


//GET - gets all resources;
router.route("/").get(resourceCtrl.getResources)

module.exports = router;
