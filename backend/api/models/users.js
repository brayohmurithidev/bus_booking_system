const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullname: { type: "string", required: true },
  email: { type: "string", unique },
  phone_no: { type: "string", required: true },
  role: { type: "string", default: "manager" },
  sacco: { type: mongoose.Schema.Types.ObjectId, ref: "Sacco" },
  username: { type: "string", required: true },
  password: { type: "string", required: true },
  reg_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", usersSchema);
