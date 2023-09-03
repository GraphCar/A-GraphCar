var express = require("express");
var router = express.Router();

var carroController = require("../controllers/carroController");

router.post("/cadastrarCarro", function (req, res) {
    carroController.cadastrarCarro(req, res);
});

module.exports = router;