var express = require("express");
var router = express.Router();

var motoristaController = require("../controllers/motoristaController");

router.get("/", function (req, res) {
    motoristaController.testar(req, res);
})

router.post("/cadastrarMotorista", function (req, res) {
    motoristaController.cadastrarMotorista(req, res);
});

module.exports = router;