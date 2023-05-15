var logModel = require("../models/logModel");

var sessoes = [];

function listar(req, res) {
    var idLog = req.params.idLog;

    console.log(idLog);

    if (idLog == undefined) {
        res.status(400).send("O id do log está undefined!");
    } else {
        logModel
            .listarCommand(idLog)
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
                    "Houve um erro ao realizar a consulta de log! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    listar
};
