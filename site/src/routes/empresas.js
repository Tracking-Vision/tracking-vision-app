var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res) {
    empresaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

router.get("/listar/:cnpj", function (req, res) {
    empresaController.listarEmpresaCnpj(req, res);
});

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    empresaController.entrar(req, res);
});

module.exports = router;