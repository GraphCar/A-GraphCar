var tabletModel = require("../models/tabletModel");

function exibirCPU(req, res) {

    tabletModel.exibirCPU().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as especies.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirGPU(req, res) {

    tabletModel.exibirGPU().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as especies.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirBateria(req, res) {

    tabletModel.exibirBateria().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as especies.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosDahTemperaturaCpu(req, res) {

    tabletModel.dadosDahTemperaturaCpu().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as especies.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dataDashTemperaturaCpu(req, res) {

    tabletModel.dataDashTemperaturaCpu().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as especies.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    exibirCPU,
    exibirGPU,
    exibirBateria,
    dadosDahTemperaturaCpu,
    dataDashTemperaturaCpu
}