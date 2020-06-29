const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/RBK", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let usersSchema = new Schema({
  fullName: { type: String, unique: true },
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

let cohortSchema = new Schema({
  cohortNumber: { type: Number, unique: true },
});

exports.COHORT = mongoose.model("COHORTS", cohortSchema);
