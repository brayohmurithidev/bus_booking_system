const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/busSchedules");

router.get("/", scheduleController.get_all_schedules);

router.post("/", scheduleController.add_new_schedule);

router.patch("/:id", scheduleController.update_schedule);

router.delete("/:id", scheduleController.delete_schedule);

module.exports = router;
