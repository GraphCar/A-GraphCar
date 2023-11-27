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

router.get("/exibirAutonomia", function (req, res) {
    tabletController.exibirAutonomia(req, res);
});

router.get("/dadosDahTemperaturaCpu", function (req, res) {
    tabletController.dadosDahTemperaturaCpu(req, res);
});

router.get("/dadosDahTemperaturaGpu", function (req, res) {
    tabletController.dadosDahTemperaturaGpu(req, res);
});

router.get("/dataDashTemperaturaCpu", function (req, res) {
    tabletController.dataDashTemperaturaCpu(req, res);
});

module.exports = router;
