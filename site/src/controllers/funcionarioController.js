var funcionarioModel = require("../models/funcionarioModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA funcionarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var cargo = req.body.cargoServer;
    var fk = req.body.fkServer;
  
    if (nome == undefined) {
      res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
      res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
      res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
      res.status(400).send("Seu cpf está undefined!");
    } else if (cargo == undefined) {
      res.status(400).send("Seu cargo está undefined!");
    } else {
      funcionarioModel
        .cadastrar(nome, email, senha, cargo, cpf, fk)
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
  
  module.exports = {
    cadastrar,
    testar,
  };