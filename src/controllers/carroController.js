var carroModel = require("../models/carroModel");

function cadastrarCarro(req, res) {
    var modeloCarro = req.body.modeloServer;
    var softwareCarro = req.body.softwareServer;

    if (softwareCarro == undefined) {
        res.status(400).send("Seu software está undefined!");
    } else if (modeloCarro == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else {

        carroModel.cadastrarCarro(modeloCarro, softwareCarro)
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
    cadastrarCarro,
}