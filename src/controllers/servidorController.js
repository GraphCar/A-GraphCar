var servidorModel = require("../models/servidorModel");

function listarDados(req, res) {
    var periodo = req.params.periodo;

    if (periodo == undefined) {
        periodo = "MONTH";
    } else {

        servidorModel.listarDados(periodo)
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

module.exports = {
    listarDados,
    listarTempoOcorrencias
}