toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

function cadastrar(){
    var nomeMotorista = ipt_nome_piloto.value;
    var modeloCarro = ipt_modelo_carro.value;
    var placaCarro = ipt_placa_carro.value;
    var verificacao = true;

    if (nomeMotorista == '') {
        toastr.error("<b style='font-family: arial;'> Insira um nome válido</b>")
        verificacao = false
    } else if (nomeMotorista.length < 4) {
        toastr.error("<b style='font-family: arial;'> Insira um nome válido</b>")
        verificacao = false
    }
    if (modeloCarro == '') {
        toastr.error("<b style='font-family: arial;'> Insira um modelo válido</b>")
        verificacao = false
    }
    if (placaCarro == '') {
        toastr.error("<b style='font-family: arial;'> Insira uma placa válida</b>")
        verificacao = false
    } else if (placaCarro.length < 7 || placaCarro.length > 12) {
        toastr.error("<b style='font-family: arial;'> Insira uma placa válida</b>")
        verificacao = false
    }

    if (verificacao) {

        fetch("/Usuarios/cadastrar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nome,
        emailServer: email,
        cpfServer: cpf,
        senhaServer: senha,
        }),
    })
        .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            setTimeout(() => {
            window.location = "login.html";
            }, "2000");

            limparFormulario();
            finalizarAguardar();
        } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
        }
        })
        .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        });

    return false;
    }
}

function clearForm() {
    ipt_nome_piloto.value = '';
    ipt_modelo_carro.value = '';
    ipt_placa_carro.value = '';
}
