const mongoose = require("mongoose");
const Saccos = require("../models/saccos");

// GET ALL BUSES
exports.get_all_saccos = async (req, res, next) => {
  try {
    const results = await Saccos.find().select(
      "_id sacco_name manager email phone_no reg_date"
    );
    console.log(results);
    if (results.length < 1) {
      res.status(404).json({
        message: "No results found",
      });
    } else {
      const result = results.map((result) => {
        return {
          id: result._id,
          sacco_name: result.sacco_name,
          manager: result.manager,
          email: result.email,
          phone_no: result.phone_no,
          reg_date: result.reg_date,
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

exports.add_new_sacco = async (req, res, next) => {
  try {
    const sacco_name = req.body.sacco_name.toLowerCase();
    // Check if exists
    const result = await Saccos.find({
      sacco_name: sacco_name,
    });
    if (result.length >= 1) {
      res.status(400).json({
        message: "Opps the sacco already exists",
      });
    } else {
      const sacco = new Saccos({
        _id: new mongoose.Types.ObjectId(),
        sacco_name: sacco_name,
        manager: req.body.manager,
        email: req.body.email,
        phone_no: req.body.phone_no,
      });
      const results = await sacco.save();
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
exports.update_sacco = async (req, res, next) => {
  try {
    const sacco_name = req.body.sacco_name.toLowerCase();
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };
    console.log(updates);

    const result = await Saccos.findByIdAndUpdate(id, updates, options);

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
exports.delete_sacco = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Saccos.findByIdAndDelete(id);
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
