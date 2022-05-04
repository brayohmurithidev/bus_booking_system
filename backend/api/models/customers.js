const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullname: { type: "string", required: true },
  email: { type: "string", unique: true },
  id_no: { type: "number", required: true },
  phone_no: { type: "string", required: true },
  username: { type: "string", required: true },
  password: { type: "string", required: true },
});

module.exports = mongoose.model("Customers", customerSchema);
