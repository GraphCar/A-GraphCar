var dadosModel = require("../models/dadosModel");

function cadastrarCarro(req, res) {
    var modeloCarro = req.body.modeloServer;
    var softwareCarro = req.body.softwareServer;
    var listaComponentes = req.body.listaComponentesServer;

    if (softwareCarro == undefined) {
        res.status(400).send("Seu software está undefined!");
    } else if (modeloCarro == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else {

        dadosModel.cadastrarCarro(modeloCarro, softwareCarro)
            .then(
                function (resultado) {
                    console.log(resultado)
                    idModelo = resultado.insertId;

                    listaComponentes.forEach(idComponente => {
                        dadosModel.inserirModeloComponente(idModelo , idComponente)
                    });
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

function alertasGerais(req, res) {

    dadosModel.alertasGerais()
        .then(
            function (resultado) {
                console.log(resultado)
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

function alertasUltimoMes(req, res) {

    dadosModel.alertasUltimoMes()
        .then(
            function (resultado) {
                console.log(resultado)
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

module.exports = {
    cadastrarCarro,
    alertasGerais,
    alertasUltimoMes
}