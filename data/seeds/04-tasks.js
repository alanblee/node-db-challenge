exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          instructions: "Use the paper to do some things.",
          notes: "Doing things with paper",
          completed: true,
        },
        {
          project_id: 1,
          instructions: "Use the pen to do some things.",
          notes: "Doing things pen",
          completed: false,
        },
        {
          project_id: 1,
          instructions: "Use the pen and paper together.",
          notes: "Doing things pen and paper",
          completed: false,
        },
        {
          project_id: 2,
          instructions: "Use the paper to do some things.",
          notes: "Doing things with paper",
          completed: true,
        },
        {
          project_id: 2,
          instructions: "Use the laptop to do some things.",
          notes: "Doing things laptop",
          completed: false,
        },
        {
          project_id: 2,
          instructions: "Use the laptop and paper together.",
          notes: "Doing things laptop and paper",
          completed: true,
        },
        {
          project_id: 3,
          instructions: "Use the water to do some things.",
          notes: "Doing things with water",
          completed: true,
        },
        {
          project_id: 3,
          instructions: "Use the toothpaste to do some things.",
          notes: "Doing things toothpaste",
          completed: false,
        },
        {
          project_id: 3,
          instructions: "Use the toothpaste and water together.",
          notes: "Doing things toothpaste and water",
          completed: true,
        },
      ]);
    });
};
