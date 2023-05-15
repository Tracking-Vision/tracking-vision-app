var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O JANELAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM janelasBloqueadas;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, endereco, id) {
  console.log(
    "ACESSEI O JANELAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    endereco,
    id
  );

  var instrucao = `
          INSERT INTO janelasBloqueadas (nome, endereco, fkMaquina) VALUES ('${nome}', '${endereco}', '${id}');
      `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function atualizar(nome, endereco, id) {
  console.log(
    "Verificar as credenciais do Banco e se ele está rodando corretamente: ",
    id,
    nome,
    endereco
  );
  var instrucao = `
    UPDATE janelasBloqueadas SET nome = ${nome}, endereco = ${endereco} WHERE idJanelasBloqueadas = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletar(id) {
    console.log("Verificar as credenciais do Banco e se ele está rodando corretamente: ", id);
    var instrucao = `
        DELETE FROM janelasBloqueadas WHERE idJanelasBloqueadas = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    deletar
};