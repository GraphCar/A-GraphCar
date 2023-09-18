var perfilModel = require("../models/perfilModel");

function exibirPerfil(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.exibirPerfil(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirCadastro(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.exibirCadastro(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirCarro(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.exibirCarro(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirConfgCarro(req, res) {
    var idModelo = req.params.idModelo;

    perfilModel.exibirConfgCarro(idModelo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function alterarFoto(req, res) {
    const imagem = req.file.filename;
    var idUsuario = req.params.idUsuario;
    
    perfilModel.alterarFoto(idUsuario, imagem)
    .then(resultado => {
      res.status(200).json(resultado);
    }).catch(err => {
      res.status(500).send(err);
    });
}

function alterarNome(req, res) {
    var nome = req.body.nome;
    var idUsuario = req.params.idUsuario;
    
    perfilModel.alterarNome(idUsuario, nome)
    .then(
        function (resultado) {
            res.json(resultado);
    }).catch(
        function(erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    exibirPerfil,
    exibirCadastro,
    exibirCarro,
    exibirConfgCarro,
    alterarFoto,
    alterarNome
}