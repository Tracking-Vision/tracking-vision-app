var express = require("express");
var router = express.Router();

var janelasController = require("../controllers/janelasController");

router.get("/listar/:idEmpresa", function (req, res) {
  janelasController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
  janelasController.cadastrar(req, res);
});

router.patch("/atualizar/:id", function (req, res) {
  janelasController.atualizar(req, res);
});

router.delete("/deletar/:idJanela", function (req, res) {
  janelasController.deletar(req, res);
});

module.exports = router;