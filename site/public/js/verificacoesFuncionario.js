function validarCadastro() {
    var erro = false;
    var nomeFuncionario = document.getElementById("nomeFuncionario").value;
    var emailFuncionario = document.getElementById("emailFuncionario").value;
    var senhaFuncionario = document.getElementById("senha").value;
    var cargoFuncionario = document.getElementById("cargoFuncionario").value;
    var cpfFuncionario = document.getElementById("cpfFuncionario").value;
    var confirmaSenhaFuncionario = document.getElementById("confirmaSenha").value;
    console.log(emailFuncionario);
    if (
      nomeFuncionario == "" ||
      emailFuncionario == "" ||
      senhaFuncionario == "" ||
      cargoFuncionario == "" ||
      cpfFuncionario == ""
    ) {
      erro = true;
      alert("Preencha todos os campos!");
    }
  
    if (nomeFuncionario.length < 3) {
      erro = true;
      alert("Nome inválido!");
      document.getElementById("nomeFuncionario").value = "";
    }
  
    if (!emailFuncionario.includes("@") || !emailFuncionario.includes(".")) {
      erro = true;
      alert("Email inválido!");
      document.getElementById("emailFuncionario").value = "";
    }
  
    if (senhaFuncionario.length < 8) {
      erro = true;
      alert("Senha inválida!");
      document.getElementById("senha").value = "";
    }
  
    if (senhaFuncionario != confirmaSenhaFuncionario) {
      erro = true;
      alert("Senhas não conferem!");
      document.getElementById("senha").value = "";
      document.getElementById("confirmaSenha").value = "";
    }
    if (cpfFuncionario.length < 11 || cpfFuncionario.length > 11) {
      erro = true;
      alert("CPF inválido!");
      document.getElementById("cpfFuncionario").value = "";
    }
  
    return erro;
  }