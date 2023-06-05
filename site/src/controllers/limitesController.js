var limitesModel = require("../models/limitesModel");

var sessoes = [];

function listar(req, res) {
  var id = req.params.idEmpresa;

  limitesModel
    .listar(id)
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

function listarGrafico(req, res) {
  var idTipo = 0;
  var idEmpresa = req.params.idEmpresa;

  limitesModel
  .listarGraficoCommand(idTipo, idEmpresa)
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
  var tipo = req.body.tipoServer;
  var idMaquina = req.body.fkMaquinaServer;
  var idEmpresa = req.body.idEmpresaServer;

  if (perigo == undefined) {
    res.status(400).send("Limite perigo está undefined!");
  } else if (aviso == undefined) {
    res.status(400).send("Limite aviso está undefined!");
  } else if (ok == undefined) {
    res.status(400).send("Limite ok está undefined!");
  } else if (tipo == undefined) {
    res.status(400).send("O tipo limite está undefined!");
  } else if (idMaquina == undefined) {
    res.status(400).send("ID da maquina está undefined!");
  } else if (idEmpresa == undefined) {
    res.status(400).send("ID da empresa está undefined!");
  } else {
    limitesModel
      .cadastrarCommand(perigo, aviso, ok, tipo, idMaquina, idEmpresa)
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
    res.status(400).send("Tipo do limite está undefined!")
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

function atualizarGrafico(req, res) {
  var perigo = req.body.perigoServer;
  var aviso = req.body.avisoServer;
  var ok = req.body.okServer;
  var id = req.body.idLimitesServer;

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
      .atualizarGraficoCommand(perigo, aviso, ok, id)
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
  var id = req.params.id;
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
  listarGrafico,
  cadastrar,
  atualizar,
  atualizarGrafico,
  deletar,
};
