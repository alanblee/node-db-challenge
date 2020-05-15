const db = require("../../../data/dataConfig");

const findResource = () => {
  return db("resources");
}

module.exports = {
  findResource,
}