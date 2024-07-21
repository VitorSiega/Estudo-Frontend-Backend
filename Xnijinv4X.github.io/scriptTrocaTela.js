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
