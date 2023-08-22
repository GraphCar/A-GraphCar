const express = require("express");
const cors = require("cors");
const path = require("path");
const IP = require('ip');
const { spawn } = require("child_process");
const PORTA = 3333;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/Usuarios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.use(cors());

app.use("/", indexRouter);
app.use("/Usuarios", usuarioRouter);

const ipAddress = IP.address();

const linkServer = `http://${ipAddress}:${PORTA}`;

app.listen(PORTA, function () {
    console.log(`Servidor Rodando Em:  ${linkServer}`);
});

const curl = spawn("curl", [`qrenco.de/${linkServer}`]);

curl.stdout.on("data", data => {
    console.log(`qrcode:\n${data}`);
});