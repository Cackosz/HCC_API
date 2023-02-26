const DAL = require("./../database/DAL");
const logger = require("pino")();
const response = require("./../utils/response");
const PacienteModel = require("./../models/PacientesModel");

const consulta = async () => {
  logger.info("PacientesController::consulta::consultando");
  let result = {};
  try {
    const data = await DAL.consulta(PacienteModel);
    logger.info(`PacientesController::consulta::data -> ${data}`);
    if (data.length > 0) {
      result = response.getResponse(null, data, true, 200, "SUCCESS");
    } else {
      result = response.getResponse(null, [], true, 200, "EMPTY");
    }
  } catch (error) {
    logger.info(`PacientesController::consulta::error -> ${error.message}`);
    result = response.getResponse(true, null, false, 500, error.message);
  }

  return result;
};

const drop = async (id) => {
  logger.info("PacientesController::drop::eliminando el id -> " + id);
  let result = {};
  try {
    const data = await DAL.drop(PacienteModel, id);
    logger.info(`PacientesController::drop::data -> ${data}`);
    if (data) {
      result = response.getResponse(null, data, true, 200, "SUCCESS");
    } else {
      result = response.getResponse(null, [], true, 200, "EMPTY");
    }
  } catch (error) {
    logger.info(`PacientesController::drop::error -> ${error.message}`);
    result = response.getResponse(true, null, false, 500, error.message);
  }
  return result;
};

const add = async (json) => {
  logger.info(
    "PacientesController::add::agregando nuevo paciente con la siguiente info -> " +
      json
  );
  let result = {};
  try {
    const nuevoObj = new PacienteModel(json);
    const data = await DAL.add(nuevoObj);
    if (data) {
      result = response.getResponse(null, data, true, 200, "SUCCESS");
    } else {
      result = response.getResponse(null, [], true, 200, "EMPTY");
    }
  } catch (error) {
    logger.info(`PacientesController::add::error -> ${error.message}`);
    result = response.getResponse(true, null, false, 500, error.message);
  }
  return result;
};

const updateById = async (id, json) => {
  logger.info(
    "PacientesController::updateById::actualizando paciente por id -> " +
      id +
      " con los siguientes datos " +
      json
  );
  let result = {};
  try {
    const data = await DAL.updateById(PacienteModel, json, id);
    logger.info(`PacientesController::updateById::data -> ${data}`);
    if (data) {
      result = response.getResponse(null, data, true, 200, "SUCCESS");
    } else {
      result = response.getResponse(null, [], true, 200, "EMPTY");
    }
  } catch (error) {
    logger.info(`PacientesController::updateById::error -> ${error.message}`);
    result = response.getResponse(true, null, false, 500, error.message);
  }

  return result;
};

const consultaPorId = async (id) => {
  logger.info("PacientesController::consultaPorId::consultando");
  let result = {};
  try {
    const data = await DAL.consultaPorId(PacienteModel, id);
    logger.info(`PacientesController::consultaPorId::data -> ${data}`);
    if (data.length > 0) {
      result = response.getResponse(null, data, true, 200, "SUCCESS");
    } else {
      result = response.getResponse(null, [], true, 200, "EMPTY");
    }
  } catch (error) {
    logger.info(`PacientesController::consulta::error -> ${error.message}`);
    result = response.getResponse(true, null, false, 500, error.message);
  }

  return result;
};

module.exports = {
  consulta,
  drop,
  add,
  updateById,
  consultaPorId
};
