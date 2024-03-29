// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";
// teste
var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var empresaRouter = require("./src/routes/empresas");
var funcionarioRouter = require("./src/routes/funcionarios")
var medidasRouter = require("./src/routes/medidas");
var maquinaRouter = require("./src/routes/maquina");
var logRouter = require("./src/routes/log");
var limitesRouter = require("./src/routes/limites")
var janelasRouter = require("./src/routes/janelas")
var dashboardRouter = require("./src/routes/dashboard")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/empresas", empresaRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/medidas", medidasRouter);
app.use("/maquina", maquinaRouter);
app.use("/log", logRouter);
app.use("/limites", limitesRouter);
app.use("/janelas", janelasRouter);
app.use("/dashboard", dashboardRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
