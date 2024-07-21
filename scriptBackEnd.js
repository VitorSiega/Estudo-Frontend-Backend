var nomePessoa = document.getElementById("nomePessoa");
var emailPessoa = document.getElementById("emailPessoa");
var senhaPessoa = document.getElementById("senhaPessoa");
var dataPessoa = document.getElementById("dataPessoa");

var submitcad = document.getElementById("btcad");

submitcad.addEventListener("click", function(event){
    event.preventDefault();
    
    if (nomePessoa.value.trim() === "" || emailPessoa.value.trim() === "" || senhaPessoa.value.trim() === "" || dataPessoa.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

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


//------------------------------------------------------


var submitLogin = document.getElementById("loginButton");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPassword");

submitLogin.addEventListener("click", function(event){
    event.preventDefault();

    if (loginEmail.value.trim() === "" || loginPass.value.trim() === "") {
        alert("Por favor, preencha ambos os campos de email e senha.");
        return;
    }

    fetch("http://localhost:8080/api/login", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            email: loginEmail.value,
            senha: loginPass.value
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Login bem-sucedido");
            alert("Login bem-sucedido!");
        } else if (response.status === 401) {
            console.log("Falha no login. Usuário ou senha incorretos.");
            alert("Falha no login. Usuário ou senha incorretos.");
        } else {
            console.log("Erro ao tentar fazer login.");
            alert("Erro ao tentar fazer login.");
        }
    })
    .catch(error => {
        console.error("Erro ao tentar fazer login:", error);
        alert("Erro ao tentar fazer login. Verifique sua conexão com a internet.");
    });
});