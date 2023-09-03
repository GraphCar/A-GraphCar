var express = require("express");
var router = express.Router();
// const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const perfilController = require("../controllers/perfilController");

router.get("/Perfil/:idUsuario", function (req, res) {
    perfilController.exibirPerfil(req, res);
});

router.get("/exibirCadastro/:idUsuario", function (req, res) {
    perfilController.exibirCadastro(req, res);
});

router.get("/exibirCarro/:idUsuario", function (req, res) {
    perfilController.exibirCarro(req, res);
});

router.get("/exibirConfgCarro/:idModelo", function (req, res) {
    perfilController.exibirConfgCarro(req, res);
});

module.exports = router;