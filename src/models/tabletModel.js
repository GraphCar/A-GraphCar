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

function exibirBateria() {

    var instrucaoSql = ''

    instrucaoSql = `select bateriaNivel from dados order by idDados desc limit 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosDahTemperaturaCpu() {

    const instrucaoSql = `SELECT cpuUso FROM dados ORDER BY dateDado DESC LIMIT 10;`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
  }

function dataDashTemperaturaCpu() {

    const instrucaoSql = `SELECT DATE_FORMAT(dateDado, '%H:%i:%s') AS hora FROM dados ORDER BY dateDado DESC LIMIT 10;`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
  }

module.exports = {
    exibirCPU,
    exibirGPU,
    exibirBateria,
    dadosDahTemperaturaCpu,
    dataDashTemperaturaCpu
}