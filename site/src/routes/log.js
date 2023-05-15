var express = require("express");
var router = express.Router();

var logController = require("../controllers/logController");

router.get("/listar/:idLog", function (req, res) {
    logController.listar(req, res);
});

module.exports = router;