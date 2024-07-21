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
