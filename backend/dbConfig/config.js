const mongoose = require("mongoose");

const url = process.env.Mongo_DB;

const dbConfig = mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("database connected successfully!");
  })
  .catch((error) => {
    console.log("Error connecting to database", error.message);
  });

module.exports = dbConfig;
