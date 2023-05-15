var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/listar", function (req, res) {
    maquinaController.listar(req, res);
});

router.patch("/deletar/:idMaquina", function (req, res) {
    maquinaController.deletar(req, res);
})

router.patch("/editar", function (req, res) {
    maquinaController.editar(req, res);
});

module.exports = router;