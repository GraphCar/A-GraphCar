var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/cadastrarCarro", function (req, res) {
    dadosController.cadastrarCarro(req, res);
});

router.get("/alertasGerais", function (req, res) {
    dadosController.alertasGerais(req, res);
});

router.get("/listarNotificacoes", function (req, res) {
    dadosController.listarNotificacoes(req, res);
});

router.get("/alertasUltimoMes", function (req, res) {
    dadosController.alertasUltimoMes(req, res);
});

router.get("/alertasConcatenados/:idModelo", function (req, res) {
    dadosController.alertasConcatenados(req, res);
});

router.get("/metasDashboard", function(req, res) {
    dadosController.metasDashboard(req, res);
});

router.get("/quantidadeCarros/:idModelo", function (req, res) {
    dadosController.quantidadeCarros(req, res);
})

module.exports = router;