function cadastrarCarro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeMotorista = req.body.nomeServer;
    var modeloCarro = req.body.modeloServer;
    var placaCarro = req.body.placaServer;

    // Faça as validações dos valores
    if (nomeMotorista == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (modeloCarro == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (placaCarro == undefined) {
        res.status(400).send("Sua placa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo carroModel.js
        carroModel.cadastrarCarro(nomeMotorista, modeloCarro, placaCarro)
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