document.addEventListener("DOMContentLoaded", function() {
    var nomeUsuario = localStorage.getItem("nomeUsuario");
    if (nomeUsuario) {
        document.getElementById("nomeUsuario").innerText = nomeUsuario;
    } else {
        // Caso o nome não tenha sido salvo, redireciona para a página inicial
        window.location.href = "../index.html";
    }
});
