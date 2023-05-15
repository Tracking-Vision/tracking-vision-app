var limitesModel = require("../models/limitesModel");

var sessoes = [];

function listar(req, res) {
  limitesModel
    .listar()
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

function cadastrar(req, res) {
  var perigo = req.body.perigoServer;
  var aviso = req.body.avisoServer;
  var ok = req.body.okServer;
  var id = req.body.idServer;

  if (perigo == undefined) {
    res.status(400).send("Limite perigo está undefined!");
  } else if (aviso == undefined) {
    res.status(400).send("Limite aviso está undefined!");
  } else if (ok == undefined) {
    res.status(400).send("Limite ok está undefined!");
  } else if (id == undefined) {
    res.status(400).send("ID da maquina está undefined!");
  } else {
    limitesModel
      .cadastrar(perigo, aviso, ok, id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function atualizar(req, res) {
  var perigo = req.body.perigoServer;
  var aviso = req.body.avisoServer;
  var ok = req.body.okServer;
  var tipo = req.body.tipoServer;
  var id = req.body.idServer;

  if (perigo == undefined) {
    res.status(400).send("Limite perigo está undefined!");
  } else if (aviso == undefined) {
    res.status(400).send("Limite aviso está undefined!");
  } else if (ok == undefined) {
    res.status(400).send("Limite ok está undefined!");
  } else if (id == undefined) {
    res.status(400).send("ID da maquina está undefined!");
  } else if (tipo == undefined){
    res.status(400).send("Tipo da maquina está undefined!")
  } else {
    limitesModel
      .atualizar(perigo, aviso, ok, id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o put: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function deletar(req, res) {
  var id = req.body.idServer;
  limitesModel
    .deletar(id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao realizar o delete: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listar,
  cadastrar,
  atualizar,
  deletar,
};
