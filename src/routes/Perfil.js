var express = require("express");
var router = express.Router();
const upload = require('../config/config'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
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

router.post('/alterarFoto/:idUsuario', upload.single('foto'), (req, res) => {
    perfilController.alterarFoto(req, res);
});

router.put('/alterarNome/:idUsuario', function (req, res) {
    perfilController.alterarNome(req, res);
});

module.exports = router;