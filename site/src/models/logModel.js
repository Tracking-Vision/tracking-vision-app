var database = require("../database/config");

function listarCommand(id) {
  console.log(
    "ACESSEI O LOG MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT TOP 1 * FROM log WHERE fkMaquina = ${id} ORDER BY idLog DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listarCommand
};
