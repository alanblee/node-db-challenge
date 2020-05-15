const Data = require("./helpers/resourceHelper");

//get resources
module.exports.getResources = async (req, res) => {
  try {
    const allResources = await Data.findResource();
    res.status(200).json(allResources);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get resources",
      err: err.message,
    });
  }
};

//add resource
module.exports.addResource = async (req, res) => {
  const { resource_name, description } = req.body;
  if (!resource_name) {
    res
      .status(400)
      .json({ message: "Please provide a name for this resource" });
  }
  try {
    const resourceInfo = {
      resource_name,
      description,
    };
    const newResource = await Data.addResource(resourceInfo);
    if (newResource.length) {
      res
        .status(201)
        .json({ success: `Resource added with id ${newResource[0]}` });
    } else {
      res.status(400).json({ message: "Could not add resource." });
    }
  } catch (err) {
    res.status(500).json({
      message: "Failed to add resource",
      err: err.message,
    });
  }
};

//remove resource
module.exports.deleteResource = async (req, res) => {
  const resourceId = Number(req.params.resourceId);
  try {
    const removedResource = await Data.removeResource(resourceId);
    if (removedResource.length > 0) {
      res.status(200).json({ removedId: removedResource[0] });
    } else {
      res
        .status(400)
        .json({ message: "Could not remove the resource with that id" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete resource", err: err.message });
  }
};
