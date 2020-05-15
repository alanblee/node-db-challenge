const db = require("../../../data/dataConfig");

const findResource = () => {
  return db("resources");
};

const addResource = (resource) => {
  return db("resources").returning("id").insert(resource);
};

const removeResource = (resourceId) => {
  return db("resources").where({ id: resourceId }).returning("id").del();
};
module.exports = {
  findResource,
  addResource,
  removeResource,
};
