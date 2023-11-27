var dadosModel = require("../models/dadosModel");


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

function alertasConcatenados(req, res) {

    modelo = req.params.idModelo;
    if (modelo == "-") {
        modelo = 0;
    } else {
        modelo = Number(modelo);
    }

    dadosModel.alertasConcatenados(modelo)
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

function metasDashboard(req, res) {
    dadosModel.metasDashboard()
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

function quantidadeCarros(req, res) {
    modelo = req.params.idModelo;
    if (modelo == "-") {
        modelo = 0;
    } else {
        modelo = Number(modelo);
    }

    dadosModel.quantidadeCarros(modelo)
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

function listarNotificacoes(req, res) {

    dadosModel.listarNotificacoes()
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

function pesquisarId(req, res) {
    carro = req.params.fkCarro
    dadosModel.pesquisarId(carro)
        .then(
            function (resultado) {
                console.log(resultado)
                res.json(resultado);
                console.log('Fetch realizado com sucesso! Resposta: \n' + resultado);
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

function capturarDadosCarro(req, res) {
    carro = sessionStorage.FK_CARRO
    dadosModel.capturarDadosCarro(carro)
        .then(
            function (resultado) {
                console.log(resultado);
                res.json(resultado);
                console.log('Fetch realizado com sucesso! Resposta: \n' + resultado);
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

function alertasCarro(req, res){
    carro = sessionStorage.FK_CARRO
    dadosModel.alertasCarro(carro)
        .then(
            function (resultado){
                console.log(resultado);
                res.json(resultado);
                console.log('Fetch realizado com sucesso! Resposta: \n '+ resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados! Erro: ",
                    erro.sqlMessage
                    )
                res.status(500).json(erro.sqlmessage);
            }
        )
}

function exibirTabelaDeCarros(req, res){
    dadosModel.exibirTabelaDeCarros()
        .then(
            function (resultado){
                console.log(resultado)
                res.json(resultado)
            }
        ).catch(
            function (erro){
                console.log(erro)
                console.log(
                    "\nHouve um erro ao buscar os dados! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    alertasGerais,
    alertasUltimoMes,
    alertasConcatenados,
    metasDashboard,
    quantidadeCarros,
    listarNotificacoes,
    pesquisarId,
    capturarDadosCarro,
    alertasCarro,
    exibirTabelaDeCarros
}