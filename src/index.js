//variables
const express = require("express");
const logger = require("pino")();
const app = express();
const http = require("http");
const bodyParser = require("body-parser");

//config servidor
app.set("port", process.env.PORT || 4000);
const server = http.createServer(app);

//routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./routes"));


//iniciar servodor
server.listen(app.get("port"), () => {
  logger.info(`Servidor iniciado en puerto::${app.get("port")}`);
});
