exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          project_id: 1,
          description: "Use the paper to do some things.",
          notes: "Doing things with paper",
          completed: true,
        },
        {
          id: 2,
          project_id: 1,
          description: "Use the pen to do some things.",
          notes: "Doing things pen",
          completed: false,
        },
        {
          id: 3,
          project_id: 1,
          description: "Use the pen and paper together.",
          notes: "Doing things pen and paper",
          completed: false,
        },
        {
          id: 4,
          project_id: 2,
          description: "Use the paper to do some things.",
          notes: "Doing things with paper",
          completed: true,
        },
        {
          id: 5,
          project_id: 2,
          description: "Use the laptop to do some things.",
          notes: "Doing things laptop",
          completed: false,
        },
        {
          id: 6,
          project_id: 2,
          description: "Use the laptop and paper together.",
          notes: "Doing things laptop and paper",
          completed: true,
        },
        {
          id: 7,
          project_id: 3,
          description: "Use the water to do some things.",
          notes: "Doing things with water",
          completed: true,
        },
        {
          id: 8,
          project_id: 3,
          description: "Use the toothpaste to do some things.",
          notes: "Doing things toothpaste",
          completed: false,
        },
        {
          id: 9,
          project_id: 3,
          description: "Use the toothpaste and water together.",
          notes: "Doing things toothpaste and water",
          completed: true,
        },
      ]);
    });
};
