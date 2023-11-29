var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.get("/listarServidores", function (req, res) {
    servidorController.listarServidores(req, res);
});

router.get("/listarDados/:fkServidor-:periodo-:grupo", function (req, res) {
    servidorController.listarDados(req, res);
});

router.get("/listarTempoOcorrencias", function (req, res) {
    servidorController.listarTempoOcorrencias(req, res);
});

router.get("/listarAlertas/:fkServidor", function (req, res) {
    servidorController.listarAlertas(req, res);
});

router.get("/listarPeriodosChamados/:fkServidor", function (req, res) {
    servidorController.listarPeriodosChamados(req, res);
});

module.exports = router;