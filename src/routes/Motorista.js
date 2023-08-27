var express = require("express");
var router = express.Router();

var motoristaController = require("../controllers/motoristaController");

router.post("/cadastrarMotorista", function (req, res) {
    motoristaController.cadastrarMotorista(req, res);
});

module.exports = router;