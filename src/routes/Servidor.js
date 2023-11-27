var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.get("/listarDados/:periodo", function (req, res) {
    servidorController.listarDados(req, res);
});

module.exports = router;