const express = require("express");
const router = express.Router();
const busesController = require("../controllers/buses");

// The get Route goes here
router.get("/", busesController.get_all_buses);

// Get Single Route
router.get("/:id", async (req, res, next) => {
  res.status(200).json({
    message: "We getting one bus",
  });
});

// The Post Route
router.post("/", busesController.add_new_bus);

// The Update route
router.patch("/:id", busesController.update_bus);
// Delete Route
router.delete("/:id", busesController.delete_bus);

module.exports = router;
