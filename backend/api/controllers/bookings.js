const mongoose = require("mongoose");
const Bookings = require("../models/bookings");
require("../models/customers");
require("../models/busSchedules");
// GET ALL BUSES
exports.get_all_bookings = async (req, res, next) => {
  try {
    const queryPopulate = [
      { path: "customer", select: "fullname phone_no id_no" },
      { path: "schedule", select: "bus price " },
    ];
    const results = await Bookings.find()
      .select("pickup_address drop_address seat_no amount ticket status")
      .populate(queryPopulate);
    console.log(results);
    if (results.length < 1) {
      res.status(404).json({
        message: "No results found",
      });
    } else {
      const result = results.map((result) => {
        return {
          id: result._id,
          customer: result.customer,
          schedule: result.schedule,
          pickup_address: result.pickup_address,
          drop_address: result.drop_address,
          seat_no: result.seat_no,
          amount: result.amount,
          mode_of_payment: result.mode_of_payment,
          ticket: result.ticket,
          status: result.status,
        };
      });
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// CREATE BUS

exports.add_new_booking = async (req, res, next) => {
  try {
    const ticket =
      Math.round(Math.random() * 1000) + Math.random().toString(36).slice(8);
    console.log(ticket);

    // Check if exists
    const result = await Bookings.find({
      seat_no: req.body.seat_no,
    });
    console.log(result);
    if (result.length >= 1) {
      res.status(400).json({
        message: "Opps the seat already picked",
      });
    } else {
      const bookings = new Bookings({
        _id: new mongoose.Types.ObjectId(),
        customer: req.body.customer_id,
        schedule: req.body.schedule,
        pickup_address: req.body.pickup_address,
        drop_address: req.body.drop_address,
        seat_no: req.body.seat_no,
        amount: req.body.amount,
        mode_of_payment: req.body.mode_of_payment,
        ticket: ticket,
        status: req.body.status,
      });
      const results = await bookings.save();
      res.status(200).json({
        message: "Bus created successfully",
        results: results,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

// GET SINGLE BUS

// UPDATE BUS DETAILS
exports.update_bookings = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await Bookings.findByIdAndUpdate(id, updates, options);

    if (result === null || result.length < 1) {
      res.status(400).json({
        message: "Encountered a error while updating",
      });
    } else {
      res.status(200).json({
        message: "record updated successfull",
        updated_bookings: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DELETE BUS RECORS
exports.delete_bookings = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Bookings.findByIdAndDelete(id);
    if (!result) {
      res.status(400).send({
        message: "Invalid ticket",
      });
    } else {
      res.status(200).send({
        message: `Ticket with Id number ${id} has been canceled`,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};
