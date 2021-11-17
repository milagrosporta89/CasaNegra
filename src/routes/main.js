const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");


//INICIO
router.get("/", mainController.index);
router.get("/casaNegra", mainController.casaNegra)
router.get("/reservationForm", mainController.reservationForm)

module.exports = router; 