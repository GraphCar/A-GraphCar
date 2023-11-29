var servidorModel = require("../models/servidorModel");

function listarServidores(req, res) {
    servidorModel.listarServidores()
        .then(
            function (resultado) {
                console.log(resultado)
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarDados(req, res) {
    var periodo = req.params.periodo;
    var grupo = req.params.grupo;
    var servidor = req.params.fkServidor;

    if (servidor == undefined) {
        console.log("Não foi selecionando um servidor");
    } else {
        if (periodo == undefined) {
            periodo = "MONTH";
        }
        if (grupo == undefined) {
            grupo = "dia";
        }
        servidorModel.listarDados(servidor, periodo, grupo)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a busca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function listarTempoOcorrencias(req, res) {
    servidorModel.listarTempoOcorrencias().then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function listarAlertas(req, res) {
    var fkServidor = req.params.fkServidor;

    if (fkServidor == undefined) {
        res.status(400).send("fkServidor inválido");
    } else {
        servidorModel.listarAlertas(fkServidor)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a busca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarPeriodosChamados(req, res) {
    var fkServidor = req.params.fkServidor;

    if (fkServidor == undefined) {
        res.status(400).send("fkServidor inválido");
    } else {
        servidorModel.listarPeriodosChamados(fkServidor)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a busca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listarServidores,
    listarDados,
    listarTempoOcorrencias,
    listarAlertas,
    listarPeriodosChamados
}