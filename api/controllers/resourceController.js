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
