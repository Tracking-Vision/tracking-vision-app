var database = require("../database/config");

function listarCommand(idEmpresa) {
  console.log(
    "ACESSEI O MAQUINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM maquina WHERE statusMaquina IS NOT NULL AND fkEmpresa = ${idEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function listarMaquinaId(id) {
  console.log(
    "ACESSEI O MAQUINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMaquinaId(): ",
  );
  var instrucao = `
        SELECT m.*, r.*, l.*
        FROM maquina AS m
        JOIN placaRede AS r ON r.fkMaquina = m.idMaquina
        JOIN limites AS l ON l.fkMaquina = m.idMaquina
        WHERE m.idMaquina = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletar(id) {
  console.log(
    "ACESSEI O MAQUINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
      UPDATE 
      maquina SET 
      statusMaquina = null
      WHERE idMaquina = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function editar(idMaquina, modeloDisco, armazenamento, modeloRam, ram, leituraDisco, escritaDisco, nomeHost, status, modeloCpu, clockCpu) {
  console.log(
    "ACESSEI O MAQUINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );

  var instrucao = `
        UPDATE maquina SET 
        statusMaquina = ${status},
        hostnameMaquina = "${nomeHost}",
        nomeModeloCpu = "${modeloCpu}",
        clockCpu = ${clockCpu},
        nomeModeloRam = "${modeloRam}",
        capacidadeTotalRam = ${ram},
        nomeModeloDisco = "${modeloDisco}",
        capacidadeTotalDisco = ${armazenamento},       
        leituraDisco = ${leituraDisco},
        escritaDisco = ${escritaDisco}
        WHERE idMaquina = ${idMaquina};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  editar,
  deletar,
  listarCommand,
  listarMaquinaId
};
