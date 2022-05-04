const { default: mongoose } = require("mongoose");
const Buses = require("../models/buses");
require("../models/saccos");
// GET ALL BUSES
exports.get_all_buses = async (req, res, next) => {
  try {
    const results = await Buses.find()
      .select("_id bus_no driver_name driver_no")
      .populate("sacco", "sacco_name manager");

    if (results.length < 1) {
      res.status(404).json({
        message: "No results found",
      });
    } else {
      const myresult = results.map((result) => {
        const numberPlates = result.bus_no.split("-");
        const numberPlate = numberPlates[0] + " " + numberPlates[1];
        const plates = numberPlate.toUpperCase();
        console.log(plates);
        return {
          id: result._id,
          busNo: plates,
          sacco: result.sacco.sacco_name,
          driver: result.driver_name,
        };
      });
      res.status(200).json({
        myresult: myresult,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// CREATE BUS

exports.add_new_bus = async (req, res, next) => {
  const busNo = req.body.bus_no.split(" ");
  const numberPlate = busNo[0] + "-" + busNo[1];
  const plates = numberPlate.toLowerCase();
  console.log(plates);
  // Check if exists
  const result = await Buses.find({
    bus_no: plates,
  });
  console.log(result);
  if (result.length >= 1) {
    res.status(400).json({
      message: "Opps the bus is already registered",
    });
  } else {
    const bus = new Buses({
      _id: mongoose.Types.ObjectId(),
      bus_no: plates,
      sacco: req.body.sacco,
      driver_name: req.body.driver_name,
      driver_no: req.body.driver_no,
    });
    const results = await bus.save();
    res.status(200).json({
      message: "Bus created successfully",
      results: results,
    });
  }
};

// GET SINGLE BUS

// UPDATE BUS DETAILS
exports.update_bus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await Buses.findByIdAndUpdate(id, updates, options);

    if (result === null || result.length < 1) {
      res.status(400).json({
        message: "Encountered a error while updating",
      });
    } else {
      res.status(200).json({
        message: "record updated successfull",
        updated_bus: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DELETE BUS RECORS
exports.delete_bus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Buses.findByIdAndDelete(id);
    if (!result) {
      res.status(400).send({
        message: "Delete unsuccessfull",
      });
    } else {
      res.status(200).send({
        message: `Bus with Id number ${id} deleted successfully`,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};
