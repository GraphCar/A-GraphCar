var aparece = false;

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


function dadosCadastro(idUsuario) {

    fetch(`/Perfil/exibirCadastro/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                // console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]

                var nome = document.getElementById("nomeCadastro");
                nome.innerHTML = infos.nome;
                var email = document.getElementById("emailCadastro");
                email.innerHTML = infos.email;
                var CPF = document.getElementById("CPFCadastro");
                CPF.innerHTML = infos.cpf;
                var plano = document.getElementById("planoCadastro");

                if (infos.nivelAcesso == 3) {
                    plano.innerHTML = 'Administrador';
                } else if (infos.nivelAcesso == 2) {
                    plano.innerHTML = 'Premium';
                } else {
                    plano.innerHTML = 'Simples';
                }

                if (aparece) {

                    hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
                    controle.style = "width: 10%";
                    hamburguer.style = "width: 100%;";
                    nomeUsuario.style = "display: none;";
                    nomeUsuario.style = "display: none;";
                    interacao.style = "display: none;";
                    dadosGerais.style = "width: 90%;";


                    dCadastro.style = "display: flex;";
                    dCarro.style = "display: none;";
                    confgCarro.style = "display: none;";


                    aparece = false

                } else {

                    dCadastro.style = "display: flex;";
                    dCarro.style = "display: none;";
                    confgCarro.style = "display: none;";

                }
            });

        } else {
            throw ('Houve um erro na API!');
        }

    }).catch(function (resposta) {
        console.error(resposta);

    });

}


function exibirCarro(idUsuario) {

    fetch(`/Perfil/exibirCarro/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                // console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]


                var placa = document.getElementById("placaCarro");
                placa.innerHTML = infos.placa;
                var modelo = document.getElementById("modeloCarro");
                modelo.innerHTML = infos.modelo;

                if (aparece) {

                    hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
                    controle.style = "width: 10%";
                    hamburguer.style = "width: 100%;";
                    nomeUsuario.style = "display: none;";
                    nomeUsuario.style = "display: none;";
                    interacao.style = "display: none;";
                    dadosGerais.style = "width: 90%;";

                    dCadastro.style = "display: none;";
                    dCarro.style = "display: flex;";
                    confgCarro.style = "display: none;";

                    aparece = false

                } else {

                    dCadastro.style = "display: none;";
                    dCarro.style = "display: flex;";
                    confgCarro.style = "display: none;";

                }

            });

        } else {
            throw ('Houve um erro na API!');
        }

    }).catch(function (resposta) {
        console.error(resposta);

    });
}



// function exibirConfgCarro(idModelo) {

//     fetch(`/Perfil/exibirConfgCarro/${idModelo}`).then(function (resposta) {
//         if (resposta.ok) {

//             resposta.json().then(function (resposta) {
//                 // console.log("Dados recebidos: ", JSON.stringify(resposta));

//                 cpu = resposta[0];
//                 memoria = resposta[1];
//                 HD = resposta[2];
//                 gpu = resposta[3];

//                 var CPU = document.getElementById("CPU");
//                 CPU.innerHTML = cpu.descricao;
//                 var GPU = document.getElementById("GPU");
//                 GPU.innerHTML = gpu.descricao;
//                 var RAM = document.getElementById("memoria");
//                 RAM.innerHTML = memoria.descricao;
//                 var armazenamento = document.getElementById("HD");
//                 armazenamento.innerHTML = HD.descricao;


//                 if (aparece) {

//                     hamburguer.innerHTML = '<img src="assets/img/Hamburger_icon.png">';
//                     controle.style = "width: 10%";
//                     hamburguer.style = "width: 100%;";
//                     nomeUsuario.style = "display: none;";
//                     nomeUsuario.style = "display: none;";
//                     interacao.style = "display: none;";
//                     dadosGerais.style = "width: 90%;";
            
//                     dCadastro.style = "display: none;";
//                     dCarro.style = "display: none;";
//                     confgCarro.style = "display: flex;";
            
//                     aparece = false
            
//                 } else {
            
//                     dCadastro.style = "display: none;";
//                     dCarro.style = "display: none;";
//                     confgCarro.style = "display: flex;";
            
//                 }

//             });

//         } else {
//             throw ('Houve um erro na API!');
//         }

//     }).catch(function (resposta) {
//         console.error(resposta);

//     });

// }

function mudarFoto(idUsuario) {
    const formData = new FormData();
    formData.append('foto', foto.files[0])

    fetch(`/Perfil/alterarFoto/${idUsuario}`, {
      method: "POST",
      body: formData
    })
      .then(res => {
        carregarPagina(idUsuario);
      })
      .catch(err => {
        console.log(err);
      })
}

  function mudarNome(idUsuario) {
    var nomeNovo = nome.value;

    fetch(`/Perfil/alterarNome/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nomeNovo
      })
    })
      .then(
        function (resposta) {
            console.log(resposta);

            if (resposta.ok) {
                info = resposta[0]
                carregarPagina(idUsuario);
                nome.value = "";
            }
            else if (resposta.status == 404) {
                window.alert("deu 404");
            }
            else {
                throw("houve um erro" + resposta.status)
            }
      })
      .catch(
        function (resposta) {
        console.log("erro");
      })
  }

function inicio() {

    window.location = "index.html";
}

function sair() {
    delete localStorage.ID_USUARIO;
    delete localStorage.ID_MODELO;
    delete localStorage.REDIRECIONAMENTO;

    window.location = "./login.html";
}

