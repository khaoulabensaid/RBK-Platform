const express = require("express");
const http = require("http");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
const database = require("../database/index.js");
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/../client/dist"));


app.get("/chat", (req, res) => {});

var server = app.listen(PORT, () => {

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

/**
 *
 * socket.io for the Chat //test
 *
 */
const socketio = require("socket.io").listen();
// const io = socketio(server);
var io = require("socket.io").listen(server);
io.on("connection", function (socket) {
  console.log("User Connected");
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
    console.log("Message");
  });
  socket.on("disconnect", function (msg) {
    console.log("User DisConnected");
  });
});

router.get("/chat", (req, res) => {
  res.send("server is running");
});

app.use(router);
/**
 *
 */
