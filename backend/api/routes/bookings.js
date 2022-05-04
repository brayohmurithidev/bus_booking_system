const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookings");

router.get("/", bookingsController.get_all_bookings);

router.post("/", bookingsController.add_new_booking);

router.patch("/:id", bookingsController.update_bookings);

router.delete("/:id", bookingsController.delete_bookings);

module.exports = router;
