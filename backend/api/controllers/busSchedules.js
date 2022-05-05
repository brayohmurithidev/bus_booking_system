const mongoose = require("mongoose");
const BusSchedules = require("../models/busSchedules");
require("../models/buses");
// GET ALL BUSES
exports.get_all_schedules = async (req, res, next) => {
  try {
    const queryPopulate = [{ path: "bus", select: "bus_no sacco" }];

    const results = await BusSchedules.find()
      .select(
        "_id from to price available_slots departure_time departure_date bus"
      )
      .populate(queryPopulate);
    console.log(results);

    if (results.length < 1) {
      res.status(404).json({
        message: "No results found",
      });
    } else {
      const result = results.map((result) => {
        const numberPlates = result.bus.bus_no.split("-");
        const numberPlate = numberPlates[0] + " " + numberPlates[1];
        const plates = numberPlate.toUpperCase();
        console.log(result);
        return {
          id: result._id,
          busNo: plates,
          from: result.from,
          to: result.to,
          price: result.price,
          available_slots: result.available_slots,
          departure_date: result.departure_date,
          departure_time: result.departure_time,
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

exports.add_new_schedule = async (req, res, next) => {
  try {
    // Check if exists
    const result = await BusSchedules.find({
      $and: [
        { bus: req.body.bus },
        { departure_date: req.body.departure_date },
        { departure_time: req.body.departure_time },
      ],
    });
    console.log(result);
    if (result.length >= 1) {
      res.status(400).json({
        message: "Ops",
      });
    } else {
      const schedule = new BusSchedules({
        _id: new mongoose.Types.ObjectId(),
        bus: req.body.bus,
        from: req.body.from,
        to: req.body.to,
        price: req.body.price,
        available_slots: req.body.available_slots,
        departure_time: req.body.departure_time,
        departure_date: req.body.departure_date,
      });
      const results = await schedule.save();
      res.status(200).json({
        message: "Schedule created successfully",
        results: results,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

// GET SINGLE Schedule
exports.get_single_schedule = async (req, res, next) => {
  try {
    const id = req.params.id;
    const results = await BusSchedules.find({
      _id: id,
    });
    const result = results.map((result) => {
      // const numberPlates = result.bus.bus_no.split("-");
      // const numberPlate = numberPlates[0] + " " + numberPlates[1];
      // const plates = numberPlate.toUpperCase();
      console.log(result);
      return {
        id: result._id,
        busNo: result.bus.bus_no,
        from: result.from,
        to: result.to,
        price: result.price,
        available_slots: result.available_slots,
        departure_date: result.departure_date,
        departure_time: result.departure_time,
      };
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE BUS DETAILS
exports.update_schedule = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await BusSchedules.findByIdAndUpdate(id, updates, options);

    if (result === null || result.length < 1) {
      res.status(400).json({
        message: "Encountered a error while updating",
      });
    } else {
      res.status(200).json({
        message: "record updated successfull",
        updated_Schedule: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DELETE BUS RECORS
exports.delete_schedule = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BusSchedules.findByIdAndDelete(id);
    if (!result) {
      res.status(400).send({
        message: "Invalid schedule",
      });
    } else {
      res.status(200).send({
        message: `Schedule with Id number ${id} has been canceled`,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};
