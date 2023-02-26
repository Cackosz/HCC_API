const express = require("express");
const router = express.Router();
const logger = require("pino")();
const PacienteController = require("./../controllers/PacientesController");

router.get("/", (req, res) => {
  logger.info("Inicio");
  res.send("Hola mundo EXPRESS");
});

router.get("/pacientes", async (req, res) => {
  logger.info("IndexRoute::pacientes::consulta");
  const result = await PacienteController.consulta();
  res.send(result);
});

router.put("/pacientes/:id", async (req, res) => {
  const { id } = req.params;
  logger.info("IndexRoute::pacientes::drop");
  const result = await PacienteController.drop(id);
  res.send(result);
});

router.post("/addPacientes", async (req, res) => {
  logger.info("IndexRoute::pacientes::addPacientes");
  let bodyRequest = {
    id: Math.floor(Math.random() * 90000) + 10000,
    nombreCompleto: req.body.nombreCompleto,
    tel: req.body.tel,
    edad: req.body.edad,
  };
  logger.info("IndexRoute::pacientes::addPacientes::data -> " + bodyRequest);
  const result = await PacienteController.add(bodyRequest);
  res.send(result);
});

router.post("/updatePaciente/:id", async (req, res) => {
  const { id } = req.params;
  logger.info("IndexRoute::pacientes::updatePaciente::id -> " + id);
  let bodyRequest = {
    nombreCompleto: req.body.nombreCompleto,
    tel: req.body.tel,
    edad: req.body.edad,
  };
  logger.info("IndexRoute::pacientes::updatePaciente::dataNueva -> " + bodyRequest);
  const result = await PacienteController.updateById(id,bodyRequest);
  res.send(result);
});

router.get("/paciente/:id", async (req, res) => {
  const { id } = req.params;
  logger.info("IndexRoute::paciente::consulta -> " + id);
  const result = await PacienteController.consultaPorId(id);
  res.send(result);
});

module.exports = router;
