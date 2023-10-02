process.env.AMBIENTE_PROCESSO = "desenvolvimento";

const express = require("express");
const cors = require("cors");
const path = require("path");
const IP = require('ip');
const { spawn } = require("child_process");
const PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/Usuarios");
var motoristaRouter = require("./src/routes/Motorista");
var perfilRouter = require("./src/routes/Perfil");
var carroRouter = require("./src/routes/Carro");
var dadosRouter = require("./src/routes/Dados");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.use(cors());

app.use("/", indexRouter);
app.use("/Usuarios", usuarioRouter);
app.use("/Motorista", motoristaRouter);
app.use("/Perfil", perfilRouter);
app.use("/Carro", carroRouter);
app.use("/Dados", dadosRouter);

const ipAddress = IP.address();

const linkServer = `http://${ipAddress}:${PORTA}`;

app.listen(PORTA, function () {
    console.log(`Servidor Rodando Em:  ${linkServer}`);
});

const curl = spawn("curl", [`qrenco.de/${linkServer}`]);

curl.stdout.on("data", data => {
    console.log(`qrcode:\n${data}`);
});