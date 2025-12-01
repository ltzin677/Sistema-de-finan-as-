// login.js

function mostrarRegistro() {
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("telaRegistro").style.display = "block";
}

function mostrarLogin() {
    document.getElementById("telaRegistro").style.display = "none";
    document.getElementById("telaLogin").style.display = "block";
}

// Registrar conta
function registrar() {
    let novoUser = document.getElementById("usuarioNovo").value;
    let novaSenha = document.getElementById("senhaNova").value;

    if (novoUser === "" || novaSenha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("usuario", novoUser);
    localStorage.setItem("senha", novaSenha);

    alert("Conta criada com sucesso!");

    mostrarLogin();
}

// Login
function entrar() {
    let user = document.getElementById("usuarioLogin").value;
    let pass = document.getElementById("senhaLogin").value;

    let userSalvo = localStorage.getItem("usuario");
    let senhaSalva = localStorage.getItem("senha");

    if (user === userSalvo && pass === senhaSalva) {
        localStorage.setItem("logado", "sim");
        window.location.href = "sistema.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}