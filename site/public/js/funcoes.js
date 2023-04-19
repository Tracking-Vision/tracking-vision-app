// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

function MenuShow() {
    menu.classList.remove("menu_move_close");
    menu.classList.toggle("menu_move_open");
    menuOpen.classList.toggle("menuOpen");
    setTimeout(() => {
        menuClose.classList.toggle("menuClose");
        containerClose.classList.toggle("closeHidden");
    }, 200)
}

function MenuHidden() {
    menu.classList.remove("menu_move_open");
    menu.classList.toggle("menu_move_close");
    menuClose.classList.toggle("menuClose");
    menuOpen.classList.toggle("menuOpen");
    containerClose.classList.remove("closeHidden");
}
