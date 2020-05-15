exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Paper",
          description: "Just a piece of paper.",
        },
        { id: 2, resource_name: "Pen", description: "A regular pen." },
        { id: 3, resource_name: "Laptop", description: "A portable computer." },
        { id: 4, resource_name: "Water", description: "Stay hydrated." },
        {
          id: 5,
          resource_name: "Toothpaste",
          description: "Keeps your teeth clean.",
        },
      ]);
    });
};
