exports.seed = function (knex) {
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Do the things",
          description: "Things that need to be done",
          completed: true,
        },
        {
          project_name: "Do other things",
          description: "Other things that need to be done",
          completed: true,
        },
        {
          project_name: "More things to do",
          description: "Things that need to be be done, on top of more things",
          completed: false,
        },
      ]);
    });
};
