var database = require("../database/config");

function cadastrar(nome, email, senha, cargo, cpf, fk) {
    console.log(
      "ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
      nome,
      email,
      senha,
      cargo,
      cpf,
      fk
    );
  
    var instrucao = `
          INSERT INTO funcionario (nome, email, senha, cpf, cargo, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}','${cpf}', '${cargo}', '${fk}');
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
  
  module.exports = {
    cadastrar
  };