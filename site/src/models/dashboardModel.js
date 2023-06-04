var database = require("../database/config");

function listar(idEmpresa) {
  console.log(
    "ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        CALL verify(${idEmpresa});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarBytesHorario(idEmpresa) {
  console.log(
    "ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
     SELECT DATE_FORMAT(horarioCapturado, '%Y-%m-%d %H:%i:00') AS intervaloMinuto, SUM(bytesRecebidos) AS totalBytesRecebidos, SUM(bytesEnviados) AS totalBytesEnviados
     FROM log JOIN maquina
     ON fkMaquina = idMaquina
     WHERE fkEmpresa = ${idEmpresa}
     GROUP BY intervaloMinuto
     ORDER BY intervaloMinuto DESC
     LIMIT 5;	
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  listarBytesHorario
};
