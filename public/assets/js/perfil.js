var aparece = false;

var dadosmostrados = {
    cadastro: false,
    carro: false,
    confg: false
}

function carregarPagina(idUsuario) {
    fetch(`/Perfil/Perfil/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                // console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]
                var nome = document.getElementById("nomeUsuario");
                nome.innerHTML = infos.nome;
                var Foto = document.getElementById("usuarioFoto");
                Foto.src = `assets/img/fotosUsuarios/${infos.foto}`;
                sessionStorage.FOTO = infos.foto;
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

function mostrarControle() {
    var foto = sessionStorage.FOTO;

    if (!aparece) {
        controle.style = "width: 100%;";
        hamburguer.style = "width: 60%;";
        hamburguer.innerHTML = `<img src="assets/img/fotosUsuarios/${foto}">`;
        nomeUsuario.style = "display: block;";
        interacao.style = "display: flex;";
        dadosGerais.style = "display: none;";

        aparece = true
    } else {
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
        nomeUsuario.style = "display: none;";
        nomeUsuario.style = "display: none;";
        interacao.style = "display: none;";
        dadosGerais.style = "width: 90%;";

        aparece = false
    }
}

function dadosCadastro() {

    if (aparece) {

        hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nomeUsuario.style = "display: none;";
        nomeUsuario.style = "display: none;";
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

        hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nomeUsuario.style = "display: none;";
        nomeUsuario.style = "display: none;";
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

        hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
        controle.style = "width: 10%";
        hamburguer.style = "width: 100%;";
        nomeUsuario.style = "display: none;";
        nomeUsuario.style = "display: none;";
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

function sair(){
    delete localStorage.ID_USUARIO;

    window.location="./login.html";
}