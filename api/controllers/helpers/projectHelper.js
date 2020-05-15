const db = require("../../../data/dataConfig");

const findProjects = () => {
  return db("projects");
};

const addProjects = (resource) => {
  return db("projects").returning("id").insert(resource);
};

const removeProjects = (resourceId) => {
  return db("projects").where({ id: resourceId }).returning("id").del();
};
module.exports = {
  findProjects,
  addProjects,
  removeProjects,
};
