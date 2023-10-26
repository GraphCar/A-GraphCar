var database = require("../database/config")

function exibirCPU() {

    var instrucaoSql = ''

    instrucaoSql = `select cpuUso from dados order by idDados desc limit 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirGPU() {

    var instrucaoSql = ''

    instrucaoSql = `select memoria from dados order by idDados desc limit 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    exibirCPU,
    exibirGPU
}