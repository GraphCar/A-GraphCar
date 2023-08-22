var usuarioModel = require("../models/usuarioModel");
const bcrypt = require('bcrypt');

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");

    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else {
        usuarioModel.entrar(email)
            .then(
                function (resultado) {

                    var usuario = resultado[0];

                    if((resultado.length-1) == 0){
                        
                        bcrypt.compare(senha, usuario['senha'], function(err, result) {
                            if(result){
                                //LOGIN APROVADO
                                req.session.EMAIL_USUARIO = usuario.emailUsuario;
                                req.session.NOME_USUARIO = usuario.nomeUsuario;
                                req.session.ID_USUARIO = usuario.idUsuario;                       
                                res.json(usuario);
                            }else{
                                //ERRO
                                res.status(403).send('Email e/ou senha inválido(s)');
                            }
                        });

                    }else if((resultado.length-1) < 0){
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
    