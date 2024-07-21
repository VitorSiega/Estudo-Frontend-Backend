var nomePessoa = document.getElementById("nomePessoa");
var emailPessoa = document.getElementById("emailPessoa");
var senhaPessoa = document.getElementById("senhaPessoa");
var dataPessoa = document.getElementById("dataPessoa");

var submitcad = document.getElementById("btcad");

submitcad.addEventListener("click", function(event){
    fetch("http://localhost:8080/usuarios/cadastro",{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: nomePessoa.value,
            dataNascimento: dataPessoa.value,
            usuario: nomePessoa.value,
            email: emailPessoa.value,
            senha: senhaPessoa.value
        })

    });

    alert("Cadastro concluido! voltando para o login");
    document.getElementById('cadastroForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');

    nomePessoa.value = '';
    emailPessoa.value = '';
    senhaPessoa.value = '';
    dataPessoa.value = '';

});
