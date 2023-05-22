var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O LIMITES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM limites;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarGraficoCommand() {
  console.log(
    "ACESSEI O LIMITES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM limites WHERE fkMaquina IS NULL;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(perigo, aviso, ok, tipo, id) {
  console.log(
    "ACESSEI O LIMITES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    perigo,
    aviso,
    ok,
    tipo,
    id
  );

  var instrucao = `
          INSERT INTO limites (perigo, aviso, ok, tipo, fkMaquina) VALUES ('${perigo}', '${aviso}', '${ok}', '${tipo}', '${id}');
      `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function atualizar(perigo, aviso, ok, id) {
  console.log(
    "Verificar as credenciais do Banco e se ele está rodando corretamente: ",
    id,
    perigo,
    aviso,
    ok
  );
  var instrucao = `
    UPDATE limites SET perigo = ${perigo}, aviso = ${aviso}, ok = ${ok} WHERE fkMaquina = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function atualizarGraficoCommand(perigo, aviso, ok, id) {
  console.log(
    "Verificar as credenciais do Banco e se ele está rodando corretamente: ",
    id,
    perigo,
    aviso,
    ok
  );
  var instrucao = `
    UPDATE limites SET horario = now(), perigo = ${perigo}, aviso = ${aviso}, ok = ${ok} WHERE idLimites = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletar(id) {
    console.log("Verificar as credenciais do Banco e se ele está rodando corretamente: ", id);
    var instrucao = `
        DELETE FROM limites WHERE idLimites = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarGraficoCommand,
    cadastrar,
    atualizar,
    deletar
};