process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
// var cors = require("cors");
// var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var usuarioRouter = require("../src/routes/usuarios");

app.listen(PORTA, function () {
    console.log(`Servidor Rodando Em: http://localhost:${PORTA} \n
    Ambiente: ${process.env.AMBIENTE_PROCESSO}`);
});