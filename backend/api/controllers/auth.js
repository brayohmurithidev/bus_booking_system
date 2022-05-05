const mongoose = require("mongoose");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

// SIGNUP ROUTE
exports.user_signup = async (req, res, next) => {
  try {
    // Check if user exists
    const email = req.body.email;
    const phone_no = req.body.email;
    const username = req.body.username;
    const query = {
      $or: [{ email: email }, { username: username }],
    };

    const result = await Users.find(query);
    console.log(result);
    if (result.length >= 1) {
      res.status(400).send({
        message: "User already exists",
      });
    } else {
      const password = await bcrypt.hash(req.body.password, 10);
      const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        fullname: req.body.fullname,
        email: req.body.email,
        phone_no: req.body.phone_no,
        sacco: req.body.sacco,
        username: req.body.username,
        password: password,
      });
      const result = await user.save();
      res.status(200).send({
        message: "User created",
        result: result,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

// LOGIN ROUTE
