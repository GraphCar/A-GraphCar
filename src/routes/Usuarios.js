var express = require("express");
var router = express.Router();

const usuarioController = require("../controllers/usuarioController");

console.log("llllllllllllllllllll")
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;