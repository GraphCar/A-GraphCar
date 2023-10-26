function modelos() {
    fetch(`/Motorista/mostrarModelos`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                // console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta

                for (let i = 0; i < resposta.length; i++) {
                    ipt_modelo.innerHTML += `<option value="${resposta[i].idModelo}" >${resposta[i].Modelo}</option>`;
                }
            
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

function cadastrar() {
    // Card 1
    var nomeVar = ipt_nome.value;
    var cpfVar = ipt_cpf.value.replaceAll('.', '').replace('-', '');
    var modeloVar = ipt_modelo.value;
    var placaVar = ipt_placa.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmarSenhaVar = ipt_confirmarSenha.value;


    var erroCadastro = false;

    // Inicio Validação
    if (nomeVar.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O nome deve ter mais de 2 letras'
          })
        ipt_nome.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_nome.style = 'border-color: none';
    }
    if (cpfVar.length != 11) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O cpf deve ter 11 dígitos'
          })
        ipt_cpf.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_cpf.style = 'border-color: none';
    }
    if (placaVar.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A placa deve ter mais de 2 dígitos'
          })
        ipt_placa.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_placa.style = 'border-color: none';
    }
    if (emailVar.indexOf('@') < 0 && emailVar.indexOf('.com') < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O email deve ter @ e .com'
          })
        ipt_email.style = 'border-color: red';
        erroCadastro = true;;
    } else {
        ipt_email.style = 'border-color: none';
    }
    if (senhaVar.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha deve ter mais de 5 dígitos'
          })
        ipt_senha.style = 'border-color: red';
        erroCadastro = true;;
    } else {
        ipt_senha.style = 'border-color: none';
    }
    if (confirmarSenhaVar != senhaVar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'As senhas estão diferentes'
          })
        ipt_confirmarSenha.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_confirmarSenha.style = 'border-color: none';
    }
    if (confirmarSenhaVar == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira a senha'
          })
        ipt_confirmarSenha.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_confirmarSenha.style = 'border-color: none';
    }
    if(modeloVar == 'default'){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira o modelo do carro'
          })
        ipt_modelo.style = 'border-color: red';
        erroCadastro = true;
    }
    //Final Validação

    if (erroCadastro) {
        return false;
    }
    else {
        Swal.fire(
            'Good job!',
            'Motorista cadastrado com sucesso !!!',
            'success'
          )
        // Enviando o valor da nova input
        fetch("/Motorista/cadastrarMotorista", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                cpfServer: cpfVar,
                placaServer: placaVar,
                modeloServer: modeloVar,
            })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                ipt_nome.value = '';
                ipt_cpf.value = '';
                ipt_email.value = '';
                ipt_senha.value = '';
                ipt_confirmarSenha.value = '';
                
                setTimeout(() => {
                    window.location = "login.html";
                }, "100000")
            } else {
                alert("Ocorreu algum erro")
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;


    }

}