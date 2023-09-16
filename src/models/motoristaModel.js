var database = require("../database/config");

function cadastrarMotorista(nome, email, senha, cpf, placa , modelo) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, email, senha, cpf, placa, modelo);
    var instrucao = `
        CALL cadastrar_motorista('${nome}','${email}', '${senha}','${cpf}', 'user.png', ${1}, '${placa}', ${modelo}
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function mostrarModelos() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirPerfil()");
    var instrucao = `
    SELECT * FROM modelocarro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports={
    cadastrarMotorista,
    mostrarModelos
}