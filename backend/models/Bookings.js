const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId(),
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
  },
  busschedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusSchedule",
  },
  pickup_address: { type: "string", required: true },
  drop_address: { type: "number", required: true },
  seat_no: { type: "number", required: true },
  amount: { type: "number", required: true },
  mode_of_paymen: { type: "string", required: true },
  ticket: { type: "string", required: true },
  status: { type: "string", default: "active" },
});

module.exports = mongoose.model("Booking", bookingSchema);
