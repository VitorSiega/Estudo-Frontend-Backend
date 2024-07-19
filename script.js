document.addEventListener("DOMContentLoaded", function() {
    function updateHeader() {
        var header = document.getElementById("header");
        if (window.innerWidth <= 500) {
            header.textContent = "Login";
        } else {
            header.textContent = "Faça seu login";
        }
    }

    // Verificar o tamanho da tela ao carregar a página
    updateHeader();

    // Verificar o tamanho da tela ao redimensionar a janela
    window.addEventListener("resize", updateHeader);
});

document.addEventListener("DOMContentLoaded", function() {
    function updateHeader() {
        var header = document.getElementById("header2");
        if (window.innerWidth <= 500) {
            header.textContent = "Cadastro";
        } else {
            header.textContent = "Faça seu cadastro";
        }
    }

    // Verificar o tamanho da tela ao carregar a página
    updateHeader();

    // Verificar o tamanho da tela ao redimensionar a janela
    window.addEventListener("resize", updateHeader);
});


document.getElementById('cadastreSeLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('cadastroForm').classList.add('active');
});

document.getElementById('voltarLoginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cadastroForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
});

        // Lembrar dados de login
        document.getElementById('loginButton').addEventListener('click', function() {
            if (document.getElementById('rememberMe').checked) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('loginEmail', document.getElementById('loginEmail').value);
                localStorage.setItem('loginPassword', document.getElementById('loginPassword').value);
            } else {
                localStorage.setItem('rememberMe', 'false');
                localStorage.removeItem('loginEmail');
                localStorage.removeItem('loginPassword');
            }
        });

        // Recuperar dados de login ao carregar a página
        window.onload = function() {
            if (localStorage.getItem('rememberMe') === 'true') {
                document.getElementById('loginEmail').value = localStorage.getItem('loginEmail');
                document.getElementById('loginPassword').value = localStorage.getItem('loginPassword');
                document.getElementById('rememberMe').checked = true;
            }
        };