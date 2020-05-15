exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "Paper",
          description: "Just a piece of paper.",
        },
        { resource_name: "Pen", description: "A regular pen." },
        { resource_name: "Laptop", description: "A portable computer." },
        { resource_name: "Water", description: "Stay hydrated." },
        {
          resource_name: "Toothpaste",
          description: "Keeps your teeth clean.",
        },
      ]);
    });
};
