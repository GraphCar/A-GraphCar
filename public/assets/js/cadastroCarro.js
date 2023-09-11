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
    var modeloCarro = ipt_modelo_carro.value;
    var softwareCarro = ipt_versao_software.value;
    
    var verificacao = true;

    if (modeloCarro == '') {
        toastr.error("<b style='font-family: arial;'> Insira um modelo válido</b>")
        verificacao = false
    } else if (modeloCarro.length < 2) {
        toastr.error("<b style='font-family: arial;'> Insira um modelo válido</b>")
        verificacao = false
    }
    if (softwareCarro == '') {
        toastr.error("<b style='font-family: arial;'> Insira uma versão de software válida</b>")
        verificacao = false
    } else if (softwareCarro.length < 7) {
        toastr.error("<b style='font-family: arial;'> Insira uma versão de software válida</b>")
        verificacao = false
    }

    if (verificacao) {

        fetch("/Carro/cadastrarCarro", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({

        modeloServer: modeloCarro,
        softwareServer: softwareCarro,
        }),
    })
        .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            toastr.success("<b style='font-family: arial;'> Cadastro bem sucedido!</b>");

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
