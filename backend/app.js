const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./dbConfig/config");
const busesRoute = require("./api/routes/buses");
const bookingsRoute = require("./api/routes/bookings");
const schedulesRoute = require("./api/routes/busSchedules");
const saccosRoute = require("./api/routes/saccos");
const usersRoute = require("./api/routes/users");

// Midlewares
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

// Lipa na mpesa middleware
// app.use(async getOAuthToken(req, res, next){
//   let consumer_key = "PzO9oFyg2L3pZAQMhbEH5eCkivmnS32G";
//   let
// })

// HEADERS SPECIFY
app.use((req, res, next) => {
  res.header("Content-Range", "buses 0-20/30");
  res.header("Access-Control-Allow-Origi", "*"); //Allows access to all controll for * all urls
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization, Content-Range"
  );
  res.header("Access-Control-Expose-Headers", "Content-Range");

  // Method options request checks for
  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// ROUTES GOES HERE
app.use("/buses", busesRoute);
app.use("/bookings", bookingsRoute);
app.use("/schedules", schedulesRoute);
app.use("/saccos", saccosRoute);
app.use("/users", usersRoute);

// Handle errors that don't succeed all the above middlewares

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// All errors handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
