var database = require("../database/config");

function alertasGerais() {
    console.log("ACESSEI O Dados MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alertasGerais():");
    
    var instrucao = `
        SELECT * FROM alertas_gerais;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function alertasUltimoMes() {
    console.log("ACESSEI O Dados MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alertasUltimoMes():");
    
    var instrucao = `
        SELECT * FROM alertas_ultimo_mes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alertasConcatenados(idModelo) {
    console.log(`ACESSEI O Dados MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alertasConcatenados(${idModelo}):`);

    if (idModelo == 0) {
        var instrucao = `
            SELECT * FROM alertas_concatenados ac INNER JOIN Carro c ON c.idCarro =  ac.fkCarro;
        `
    } else {
        var instrucao = `
            SELECT * FROM alertas_concatenados ac INNER JOIN Carro c ON c.idCarro =  ac.fkCarro WHERE c.fkModelo = ${idModelo};
        `
    }

    
    console.log('Executando a instrução SQL: \n' + instrucao);
    return database.executar(instrucao);
}

function metasDashboard() {
    console.log("ACESSEI O Dados MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function metasDashboard():");

    var instrucao = `
        SELECT * FROM metas_dashboard;
    `
    console.log('Executando a instrução SQL: \n' + instrucao);
    return database.executar(instrucao);
}

function quantidadeCarros(idModelo) {
    console.log(`ACESSEI O Dados MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quantidadeCarros(${idModelo}):`);

    if (idModelo == 0) {
        var instrucao = `
            SELECT COUNT(idCarro) AS count_carro FROM Carro;
        `
    } else {
        var instrucao = `
            SELECT COUNT(idCarro) AS count_carro FROM Carro WHERE fkModelo = ${idModelo};
        `
    }

    
    console.log('Executando a instrução SQL: \n' + instrucao);
    return database.executar(instrucao);
}

function listarNotificacoes(){
    console.log("Estou no dadosModel, listando notificações")

    var instrucao = `
        SELECT * FROM alerta_atual;
    `
    console.log("Executando a instrução SQL: \n" + instrucao); 
    return database.executar(instrucao);
}

function pesquisarId(fkCarro) {
    console.log(`ACESSEI O Dados MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarId(${fkCarro}):`);

    var instrucao = `
            SELECT * FROM dados WHERE fkCarro = ${fkCarro};
        `

    console.log('Executando a instrução SQL: \n' + instrucao);
    return database.executar(instrucao);
}

module.exports={
    alertasGerais,
    alertasUltimoMes,
    alertasConcatenados,
    metasDashboard,
    quantidadeCarros,
    listarNotificacoes,
    pesquisarId
}