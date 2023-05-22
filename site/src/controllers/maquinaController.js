var maquinaModel = require("../models/maquinaModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA maquinaController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    maquinaModel
    .listarCommand()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta de máquina! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function editar(req, res) {
  var idMaquina = req.params.idMaquina
  var modeloDisco = req.body.modeloDiscoServer;
  var armazenamento = req.body.armazenamentoServer;
  var modeloRam = req.body.modeloRamServer;
  var ram = req.body.ramServer;
  var leituraDisco = req.body.leituraDiscoServer;
  var escritaDisco = req.body.escritaDiscoServer;
  var nomeHost = req.body.nomeHostServer;
  var status = req.body.statusServer;
  var modeloCpu = req.body.modeloCpuServer;
  var clockCpu = req.body.clockCpuServer;

  if (idMaquina == undefined) {
    res.status(400).send("O idMaquina da máquina está undefined!");
  } else if (modeloDisco == undefined) {
    res.status(400).send("O modelo do disco da máquina está undefined!");
  } else if (armazenamento == undefined) {
    res.status(400).send("O armazenamento da máquina está undefined!");
  } else if (modeloRam == undefined) {
    res.status(400).send("O modelo da ram da máquina está undefined!");
  } else if (ram == undefined) {
    res.status(400).send("A ram da máquina está undefined!");
  } else if (leituraDisco == undefined) {
    res.status(400).send("A leitura do disco da máquina está undefined!");
  } else if (escritaDisco == undefined) {
    res.status(400).send("A escrita do disco da máquina está undefined!");
  } else if (nomeHost == undefined) {
    res.status(400).send("O nome do host da máquina está undefined!");
  } else if (status == undefined) {
    res.status(400).send("O status do host da máquina está undefined!");
  } else if (modeloCpu == undefined) {
    res.status(400).send("O modelo do cpu da máquina está undefined!");
  } else if (clockCpu == undefined) {
    res.status(400).send("O clock do cpu da máquina está undefined!");
  } else {
    maquinaModel
      .editar(idMaquina, modeloDisco, armazenamento, modeloRam, ram, leituraDisco, escritaDisco, nomeHost, status, modeloCpu, clockCpu)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar a edição! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function deletar(req, res) {
  var idMaq = req.params.idMaquina;

  if (idMaq == undefined) {
    res.status(400).send("O id da máquina está undefined!");
  } else {
    maquinaModel
      .deletar(idMaq)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao deletar! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listarPorId(req, res) {
  var idMaq = req.params.idMaquina;

  if (idMaq == undefined) {
    res.status(400).send("O id da máquina está undefined!");
  } else {
    maquinaModel
      .listarMaquinaId(idMaq)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao listar por id! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  testar,
  listar,
  listarPorId,
  editar,
  deletar,
};
