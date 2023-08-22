var aparece = false;

var dadosmostrados = {
    cadastro: false,
    carro: false,
    confg: false
}

function mostrarControle() {

    if (!aparece) {
        controle.style = "width: 100%;";
        hamburguer.style = "width: 60%;";
        nome.style = "display: block;";
        interacao.style = "display: flex;";
        dadosGerais.style = "width: 0%;";

        aparece = true
    } else {
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nome.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        aparece = false
    }
}

function dadosCadastro() {

    if (aparece) {

        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nome.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        if (dadosmostrados.cadastro) {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.cadastro = false

        } else {

            dCadastro.style = "display: flex;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.cadastro = true
            dadosmostrados.carro = false
            dadosmostrados.confg = false
        }

        aparece = false

    } else {

        if (dadosmostrados.cadastro) {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.cadastro = false

        } else {
            dCadastro.style = "display: flex;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.cadastro = true
            dadosmostrados.carro = false
            dadosmostrados.confg = false
        }

    }
}

function dadosCarro() {

    if (aparece) {

        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nome.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        if (dadosmostrados.carro) {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.carro = false

        } else {

            dCadastro.style = "display: none;";
            dCarro.style = "display: flex;";
            confgCarro.style = "display: none;";

            dadosmostrados.cadastro = false
            dadosmostrados.carro = true
            dadosmostrados.confg = false
        }

        aparece = false

    } else {

        if (dadosmostrados.carro) {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.carro = false

        } else {

            dCadastro.style = "display: none;";
            dCarro.style = "display: flex;";
            confgCarro.style = "display: none;";

            dadosmostrados.cadastro = false
            dadosmostrados.carro = true
            dadosmostrados.confg = false
        }

    }
}

function confCarro() {

    if (aparece) {

        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nome.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        if (dadosmostrados.confg) {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.confg = false
            
        } else {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: flex;";

            dadosmostrados.cadastro = false
            dadosmostrados.carro = false
            dadosmostrados.confg = true
        }
        
        aparece = false

    } else {

        if (dadosmostrados.confg) {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: none;";

            dadosmostrados.confg = false

        } else {

            dCadastro.style = "display: none;";
            dCarro.style = "display: none;";
            confgCarro.style = "display: flex;";

            dadosmostrados.cadastro = false
            dadosmostrados.carro = false
            dadosmostrados.confg = true
        }

    }
}

function inicio() {

    window.location = "index.html";
}

// function sair() {


// }