var express = require("express");
var router = express.Router();

var limitesController = require("../controllers/limitesController");

router.get("/listar", function (req, res) {
  limitesController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
  limitesController.cadastrar(req, res);
});

router.put("/atualizar/:id", function (req, res) {
  limitesController.atualizar(req, res);
});

router.delete("/deletar/:id", function (req, res) {
  limitesController.deletar(req, res);
});
