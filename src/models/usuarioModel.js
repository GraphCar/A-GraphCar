var database = require("../database/config");

function entrar(email,senha){
    console.log("ACESSEI O USUARIO MODEL");
    var instrucao = `SELECT * FROM Usuario WHERE email = ${email} AND senha = ${senha}`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports={
    entrar,
}