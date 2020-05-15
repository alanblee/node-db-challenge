require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//import routes
const resourceRoutes = require("./api/routes/resourceRoutes");

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config routes
app.use("/api/resources", resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
