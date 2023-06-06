function validarLogin() {
    var email = document.getElementById('emailEmpresa').value;
    var senha = document.getElementById('senha').value;
    if (email == "" || senha == "") {
        Swal.fire(
            'Campos inválidos!',
            'Preencha todos os campos!',
            'error'
        )
        return true
    }
    if (!email.includes("@") || !email.includes(".")) {
        Swal.fire(
            'Email inválido!',
            'Verifique o campo e tente novamente!',
            'error'
        )
        document.getElementById("emailEmpresa").value = ""
        return true;

    }
    if (senha.length < 8) {
        Swal.fire(
            'Senha inválida!',
            'Verifique o campo e tente novamente!',
            'error'
        )
        document.getElementById("senha").value = ""
        return true;
    }

    return false;
}