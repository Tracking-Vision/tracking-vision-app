var database = require("../database/config");

function listar(idEmpresa) {
  console.log(
    "ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        EXEC verify @idEmpresa = ${idEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarBytesHorario(idEmpresa) {
  console.log(
    "ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
  SELECT FORMAT(horarioCapturado, 'yyyy-MM-dd HH:mm:00') AS intervaloMinuto, SUM(bytesRecebidos) AS totalBytesRecebidos, SUM(bytesEnviados) AS totalBytesEnviados
  FROM log
  JOIN maquina ON fkMaquina = idMaquina
  WHERE fkEmpresa = ${idEmpresa}
  GROUP BY FORMAT(horarioCapturado, 'yyyy-MM-dd HH:mm:00')
  ORDER BY intervaloMinuto DESC
  OFFSET 0 ROWS FETCH NEXT 5 ROWS ONLY;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarMaquinaHora(idEmpresa) {
  console.log(
    "ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT COUNT(*) AS qtdMaquinaHora, GETDATE() AS horario
        FROM maquina
        WHERE fkEmpresa = ${idEmpresa}
        AND statusMaquina = 1
        AND GETDATE() >= DATEADD(HOUR, -1, GETDATE());
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  listarBytesHorario,
  listarMaquinaHora
};
