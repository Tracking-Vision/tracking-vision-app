var dashboardModel = require("../models/dashboardModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA empresaController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    var idEmpresa = req.params.idEmpresa;
    dashboardModel
    .listar(idEmpresa)
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
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function listarBytes(req, res) {
  var idEmpresa = req.params.idEmpresa;
    dashboardModel
    .listarBytesHorario(idEmpresa)
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
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function listarMaquina(req, res) {
  var idEmpresa = req.params.idEmpresa;
    dashboardModel
    .listarMaquinaHora(idEmpresa)
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
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listar,
  listarBytes,
  listarMaquina,
  testar,
};
