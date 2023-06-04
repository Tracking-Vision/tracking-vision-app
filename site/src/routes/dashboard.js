var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/", function (req, res) {
    dashboardController.testar(req, res);
});

router.get("/listarStatusMaquina/:idEmpresa", function (req, res) {
    dashboardController.listar(req, res);
});

router.get("/listarBytesHorario/:idEmpresa", function (req, res) {
    dashboardController.listarBytes(req, res);
});

module.exports = router;