const mongoose = require("mongoose");

const busScheduleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
  },
  from: { type: "string", required: true },
  to: { type: "string", required: true },
  price: { type: "number", required: true },
  available_slots: { type: "number", default: 13 },
  departure_time: { type: "string", required: true },
  departure_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BusSchedule", busScheduleSchema);
