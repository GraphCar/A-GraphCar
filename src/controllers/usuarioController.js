var usuarioModel = require("../models/usuarioModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        bcrypt.hash(senha, saltRounds, (err, senha_criptografada) =>{
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            usuarioModel.cadastrar(nome, email, cpf, senha_criptografada)
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
        });
        
    }
}



function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");

    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else {
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {



                    var usuario = resultado[0];
                    if(resultado.length == 1){
                        
                        bcrypt.compare(senha, usuario['senha'], function(err, result) {
                            if(result){
                                //LOGIN APROVADO
                                
                                if(usuario.nivelAcesso>=3){
                                    usuario["Redirecionamento"]="./D-GraphCar/template/index.html";
                                } else {
                                    usuario["Redirecionamento"]="perfil.html";
                                }

                                res.json(usuario);
                            }else{
                                //ERRO
                                res.status(403).send('Email e/ou senha inválido(s)');
                            }
                        });

                    }else if(resultado.length == 0){
                        res.status(403).send('Email e/ou senha inválido(s)');

                    }else{
                        res.status(403).send('Mais de um usuário com o mesmo login e senha! Entre em contato com o suporte!');

                    }

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    entrar,
    cadastrar
}