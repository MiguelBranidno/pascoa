function salvarNome() {
    var nome = document.getElementById("nomeInput").value;
    localStorage.setItem("nomeUsuario", nome);
    window.location.href = "pagina/index.html";
}
