function Cadastrar(){
    var nomeMotorista = ipt_nome_piloto.value;
    var modeloCarro = ipt_modelo_carro.value;
    var placaCarro = ipt_placa_carro.value;


    setTimeout(() => {
        clearForm()
    },2000)
    console.log(nomeMotorista, modeloCarro, placaCarro);
}

function clearForm() {
    ipt_nome_piloto.value = '';
    ipt_modelo_carro.value = '';
    ipt_placa_carro.value = '';

    window.location = "perfil.html"
}