var aparece = false;

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

        dCadastro.style ="display: flex;";
        dCarro.style ="display: none;";
        confgCarro.style ="display: none;";

        aparece = false
    } else {
        dCadastro.style ="display: flex;";
        dCarro.style ="display: none;";
        confgCarro.style ="display: none;";
    }
}

function dadosCarro() {

    if (aparece) {
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nome.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        dCadastro.style ="display: none;";
        dCarro.style ="display: flex;";
        confgCarro.style ="display: none;";

        aparece = false
    } else {
        dCadastro.style ="display: none;";
        dCarro.style ="display: flex;";
        confgCarro.style ="display: none;";

    }
}

function confCarro() {

    if (aparece) {
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nome.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        dCadastro.style ="display: none;";
        dCarro.style ="display: none;";
        confgCarro.style ="display: flex;";

        aparece = false
    } else {
        dCadastro.style ="display: none;";
        dCarro.style ="display: none;";
        confgCarro.style ="display: flex;";

    }
}

function inicio() {

    window.location = "index.html";
}

// function sair() {


// }