const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/RBK", { useNewUrlParser: true });
let usersSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  role: String,
  cohort: Number,
});

exports.RBK = mongoose.model("RBK", usersSchema);

let chatRoomSchema = new Schema({
  message: String,
  messageSender: String,
  messageSenderCohort: Number,
  messageSenderRole: String,
  createdAt: String,
});

exports.CHATROOM = mongoose.model("CHATROOM", chatRoomSchema);

