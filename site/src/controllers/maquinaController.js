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
  var armazenamento = req.body.armazenamentoServer;
  var ram = req.body.ramServer;
  var status = req.body.statusServer;

  if (armazenamento == undefined) {
    res.status(400).send("O armazenamento da máquina está undefined!");
  } else if (ram == undefined) {
    res.status(400).send("A RAM da máquina está undefined!");
  } else if (status == undefined) {
    res.status(400).send("O status da máquina está undefined!");
  } else {
    maquinaModel
      .editar(armazenamento, ram, status)
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

module.exports = {
  editar,
  deletar,
  listar,
  testar,
};
