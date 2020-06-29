const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const database = require("../database/index.js");
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {});
app.post("/UserCreation", (req, res) => {
  const User = database.RBK;
  User.create(req.body);
});
app.get("/UserData", (req, res) => {
  const User = database.RBK;
  User.find((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});
app.get("/CohortData", (req, res) => {
  const cohort = database.COHORT;
  cohort.find((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});
app.post("/CohortCreation", (req, res) => {
  const cohort = database.COHORT;
  cohort.create(req.body);
});
app.listen(PORT, () => {
  console.log("App is listening ON: ", PORT);
});
