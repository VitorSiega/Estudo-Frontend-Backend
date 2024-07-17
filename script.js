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