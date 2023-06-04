var janelasModel = require("../models/janelasModel");

var sessoes = [];

function listar(req, res) {
  var idEmpresa = req.params.idEmpresa;
  janelasModel
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

function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var endereco = req.body.enderecoServer;
  var id = req.body.idEmpresaServer;

  if (nome == undefined) {
    res.status(400).send("Nome está undefined!");
  } else if (endereco == undefined) {
    res.status(400).send("Endereço está undefined!");
  } else if (id == undefined) {
    res.status(400).send("Id está undefined!");
  }else {
    janelasModel
      .cadastrar(nome, endereco, id)
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
  var nome = req.body.nomeServer;
  var endereco = req.body.enderecoServer;
  var id = req.body.idServer;

  if (nome == undefined) {
    res.status(400).send("Nome está undefined!");
  } else if (endereco == undefined) {
    res.status(400).send("Endereço está undefined!");
  } else if (id == undefined) {
    res.status(400).send("Id está undefined!");
  } else {
    janelasModel
      .atualizar(nome, endereco, id)
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
  var id = req.params.idJanela;
  janelasModel
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