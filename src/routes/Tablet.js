var express = require("express");
var router = express.Router();

var tabletController = require("../controllers/tabletController");

router.get("/exibirCPU", function (req, res) {
    tabletController.exibirCPU(req, res);
});

router.get("/exibirGPU", function (req, res) {
    tabletController.exibirGPU(req, res);
});

router.get("/exibirBateria", function (req, res) {
    tabletController.exibirBateria(req, res);
});

module.exports = router;
