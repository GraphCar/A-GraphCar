function cadastrar() {
    // Card 1
    var nomeVar = ipt_nome.value;
    var cpfVar = ipt_cpf.value;
    var modeloVar = ipt_modelo.value;
    var placaVar = ipt_placa.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmarSenhaVar = ipt_confirmarSenha.value;


    var erroCadastro = false;

    // Inicio Validação
    if (nomeVar.length < 3) {
        ipt_nome.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_nome.style = 'border-color: none';
    }
    if (cpfVar.length != 11) {
        ipt_cpf.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_cpf.style = 'border-color: none';
    }
    if (placaVar.length < 3) {
        ipt_placa.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_placa.style = 'border-color: none';
    }
    if (emailVar.indexOf('@') < 0 && emailVar.indexOf('.com') < 0) {
        ipt_email.style = 'border-color: red';
        erroCadastro = true;;
    } else {
        ipt_email.style = 'border-color: none';
    }
    if (senhaVar.length < 6) {
        ipt_senha.style = 'border-color: red';
        erroCadastro = true;;
    } else {
        ipt_senha.style = 'border-color: none';
    }
    if (confirmarSenhaVar != senhaVar) {
        ipt_confirmarSenha.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_confirmarSenha.style = 'border-color: none';
    }
    if (confirmarSenhaVar == "") {
        ipt_confirmarSenha.style = 'border-color: red';
        erroCadastro = true;
    } else {
        ipt_confirmarSenha.style = 'border-color: none';
    }
    //Final Validação

    if (erroCadastro) {
        return false;
    }
    else {
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
                }, "2000")
            } else {
                alert("Ocorreu algum erro")
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;


    }

}