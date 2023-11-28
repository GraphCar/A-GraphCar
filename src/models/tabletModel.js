var database = require("../database/config")

function exibirCPU() {

    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 cpuUso from dados order by idDados desc;`
    } else {
        instrucaoSql = `select cpuUso from dados order by idDados desc limit 1;`
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirGPU() {

    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 memoria from dados order by idDados desc;`
    } else {
        instrucaoSql = `select memoria from dados order by idDados desc limit 1;`
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirBateria() {

    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 bateriaNivel from dados order by idDados desc;`
    } else {
        instrucaoSql = `select bateriaNivel from dados order by idDados desc limit 1;`
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirAutonomia() {

    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 bateriaTempoRestante from dados order by idDados desc;`
    } else {
        instrucaoSql = `select bateriaTempoRestante from dados order by idDados desc limit 1;`
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosDahTemperaturaCpu() {

    var instrucaoSql = "";
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 10 cpuUso FROM dados ORDER BY dateDado DESC`;
    } else {
        instrucaoSql = `SELECT cpuUso FROM dados ORDER BY dateDado DESC LIMIT 10`;
    }
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function dadosDahTemperaturaGpu() {

    var instrucaoSql = "";
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1 memoria FROM dados ORDER BY dateDado DESC;`;
    } else {
        instrucaoSql = `SELECT memoria FROM dados ORDER BY dateDado DESC LIMIT 10;`;
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function dataDashTemperaturaCpu() {

    var instrucaoSql = ``;
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 10 FORMAT(dateDado, 'hh:mm:ss') AS hora FROM dados ORDER BY dateDado DESC;`;
    } else {
        instrucaoSql = `SELECT DATE_FORMAT(dateDado, '%H:%i:%s') AS hora FROM dados ORDER BY dateDado DESC LIMIT 10;`;
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
  }

module.exports = {
    exibirCPU,
    exibirGPU,
    exibirBateria,
    dadosDahTemperaturaCpu,
    dataDashTemperaturaCpu,
    dadosDahTemperaturaGpu,
    exibirAutonomia
}