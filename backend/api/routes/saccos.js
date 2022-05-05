const express = require("express");
const router = express.Router();
const saccosController = require("../controllers/saccos");

router.get("/", saccosController.get_all_saccos);

router.post("/", saccosController.add_new_sacco);

router.patch("/:id", saccosController.update_sacco);

router.delete("/:id", saccosController.delete_sacco);

module.exports = router;
