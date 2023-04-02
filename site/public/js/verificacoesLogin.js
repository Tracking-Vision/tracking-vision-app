function validarLogin () {
    var email = document.getElementById('emailEmpresa').value;
    var senha = document.getElementById('senha').value;
    if (email == "" || senha == "") {
        alert("Preencha todos os campos");
        return true
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email inválido");
        document.getElementById("emailEmpresa").value = ""
        return true;

    }
    if (senha.length < 8) {
        alert("Senha inválida");
        document.getElementById("senha").value = ""
        return true;
    }

    return false;
}