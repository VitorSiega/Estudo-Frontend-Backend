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