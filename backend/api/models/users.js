const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  fullname: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  phone_no: { type: "string", required: true, unique: true },
  role: { type: "string", default: "manager" },
  sacco: { type: mongoose.Schema.Types.ObjectId, ref: "Sacco" },
  username: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  reg_date: { type: "string", default: new Date().toLocaleDateString() },
});

module.exports = mongoose.model("Users", usersSchema);
