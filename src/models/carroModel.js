var database = require("../database/config")

function cadastrarCarro(modeloCarro, softwareCarro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarCarro():", modeloCarro, softwareCarro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO ModeloCarro (Modelo, VersaoSoftware) VALUES ('${modeloCarro}', '${softwareCarro}');`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function inserirModeloComponente(fkModeloCarro, fkComponente) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarCarro():", modeloCarro, softwareCarro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO modeloComponente (fkComponente, fkModeloCarro) VALUES (${fkComponente}, ${fkModeloCarro});`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarCarro,
    inserirModeloComponente
}