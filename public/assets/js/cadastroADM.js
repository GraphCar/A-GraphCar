{/* <script src="toastr.js"></script>

function adm() {
    var nome = ipt_nome_adm;
    var email = ipt_email_adm;
    var cpf = ipt_cpf_adm;
    var senha = ipt_senha_adm;
    var confirmSenha = ipt_confirm_senha_adm;
    var verificacao = true

    if (nome.length == 0 || nome.length < 3) {
        alert("Nome inválido");
        verificacao = false;
    }

    if (email.length == 0 || email.length < 10) {
        alert("Email inválido");
        verificacao = false;

    }

    if (cpf.length < 11) {
        alert("CPF inválido")
        verificacao = false;
    }

    if (senha.length == 0 || senha.length < 6) {
        alert("Sua senha deve conter mais de 6 caracteres");
        verificacao = false;
    }

    if (senha != confirmSenha) {
        alert("Senhas diferentes");
        verificacao = false;
    }

    if (verificacao) {

        fetch("/usuarios/cadastrar", {
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
              senhaServer: senhaVar,
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
              finalizarAguardar();
            });
      
          return false;
        
    }

    
    }
  
 */}
