var motoristaModel = require("../models/motoristaModel");

var sessoes = [];

function cadastrarMotorista(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // Dados Funcionario
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var placa = req.body.placaServer;
    var modelo = req.body.modeloServer;
    var plano = req.body.planoServer;


    console.log(`${nome} ${email} ${senha} ${cpf} ${plano} ${placa} ${modelo}`);

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (placa == undefined) {
        res.status(400).send("Sua placa está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (plano == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    }

    else {
        // Passe os valores como parâmetro e vá para o arquivo funcionarioModel.js
        motoristaModel.cadastrarMotorista(nome, email, senha, cpf, plano, placa, modelo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarMotorista
}