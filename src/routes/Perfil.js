var express = require("express");
var router = express.Router();
// const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const perfilController = require("../controllers/perfilController");

router.get("/Perfil/:idUsuario", function (req, res) {
    perfilController.exibirPerfil(req, res);
});

module.exports = router;