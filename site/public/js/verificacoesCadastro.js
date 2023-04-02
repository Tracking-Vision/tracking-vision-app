

function validarCadastro() {
    var erro  = false;
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var emailEmpresa = document.getElementById("emailEmpresa").value;
    var senhaEmpresa = document.getElementById("senha").value;
    var enderecoEmpresa = document.getElementById("enderecoEmpresa").value;
    var cnpjEmpresa = document.getElementById("cnpjEmpresa").value;
    var confirmaSenhaEmpresa = document.getElementById("confirmaSenha").value;
    console.log(emailEmpresa)
    if (nomeEmpresa == "" || emailEmpresa == "" || senhaEmpresa == "" || enderecoEmpresa == "" || cnpjEmpresa == "") {
        erro = true
        alert("Preencha todos os campos!");
    }

    if(nomeEmpresa.length < 5) {
        erro = true
        alert("Nome inválido!");
        document.getElementById("nomeEmpresa").value = ""
    }

    if(!emailEmpresa.includes("@") || !emailEmpresa.includes(".")) {
        erro = true
        alert("Email inválido!");
        document.getElementById("emailEmpresa").value = ""
    }

    if (senhaEmpresa.length < 8) {
        erro = true
        alert("Senha inválida!");
        document.getElementById("senha").value = ""
    }

    if(senhaEmpresa != confirmaSenhaEmpresa) {
        erro = true
        alert("Senhas não conferem!");
        document.getElementById("senha").value = ""
        document.getElementById("confirmaSenha").value = ""

    }
    if (cnpjEmpresa.length < 14 || cnpjEmpresa.length > 14) {
        erro = true
        alert("CNPJ inválido!");
        document.getElementById("cnpjEmpresa").value = ""
    }

    if (enderecoEmpresa.length < 10) {
        erro = true
        alert("Endereço inválido!");
        document.getElementById("enderecoEmpresa").value = ""
    }

    return erro;
}