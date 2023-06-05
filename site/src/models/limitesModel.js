var database = require("../database/config");

function listar(id) {
  console.log(
    "ACESSEI O LIMITES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT *
        FROM limites AS l
        JOIN maquina AS m ON l.fkMaquina = m.idMaquina
        WHERE l.fkEmpresa = ${id} AND tipo = 1 AND (m.statusMaquina = 1 OR m.statusMaquina = 0);
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarGraficoCommand(idTipo, idEmpresa) {
  console.log(
    "ACESSEI O LIMITES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM limites WHERE tipo = ${idTipo} AND fkEmpresa = ${idEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarCommand(perigo, aviso, ok, tipo, idMaquina, idEmpresa) {
  console.log(
    "ACESSEI O LIMITES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );

  var instrucao = `
          INSERT INTO limites (perigo, aviso, ok, tipo, fkMaquina, fkEmpresa) VALUES (${perigo}, ${aviso}, ${ok}, ${tipo}, ${idMaquina = idMaquina == 0 ? null : idMaquina}, ${idEmpresa});
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
    UPDATE limites SET perigo = ${perigo}, aviso = ${aviso}, ok = ${ok} WHERE idLimites = ${id};
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
  cadastrarCommand,
  atualizar,
  atualizarGraficoCommand,
  deletar
};