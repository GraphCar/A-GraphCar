var database = require("../database/config");

function cadastrar(nome, email, cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome, email, senha, cpf , nivelAcesso) VALUES ('${nome}', '${email}', '${senha}', '${cpf}' , ${3});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function entrar(email,senha){
    console.log("ACESSEI O USUARIO MODEL");
    var instrucao = `SELECT idModelo,
                        u.* FROM usuario u
                        LEFT JOIN carro ON carro.fkUsuario = u.idUsuario
                        LEFT JOIN modeloCarro ON carro.fkModelo = modeloCarro.idModelo
                        WHERE u.email = '${email}';`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports={
    entrar,
    cadastrar
}