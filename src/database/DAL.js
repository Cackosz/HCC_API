const logger = require("pino")();
require("./../dbconnection/db");

const consulta = async (model) => {
  const result = await model
    .find({})
    .then((data) => {
      logger.info(`DAL.js::consulta::result:: ${data}`);
      return data;
    })
    .catch((error) => {
      logger.info(`DAL.js::consulta::error:: ${error.message}`);
      return null;
    });
  return result;
};

const drop = async (model, id) => {
  const result = await model
    .deleteOne({ id: id })
    .then((data) => {
      logger.info(`DAL.js::drop::result:: ${data}`);
      return data;
    })
    .catch((error) => {
      logger.info(`DAL.js::drop::error:: ${error.message}`);
      return null;
    });
  return result;
};

const add = async (objeto) => {
  const result = await objeto.save();
  logger.info(`DAL.js::add::result:: ${result}`);
  return result;
};

const updateById = async (model, obj, id) => {
  const filter = { id: id };
  const result = await model
    .updateOne(filter, { $set: obj })
    .then((data) => {
      logger.info(`DAL.js::updateById::result:: ${data}`);
      return data;
    })
    .catch((error) => {
      logger.info(`DAL.js::updateById::error:: ${error.message}`);
      return null;
    });
  return result;
};

const consultaPorId = async (model, id) => {
  const result = await model
    .find({ id: id })
    .lean()
    .then((data) => {
      logger.info(`DAL.js::consultaPorId::result:: ${data}`);
      return data;
    })
    .catch((error) => {
      logger.info(`DAL.js::consultaPorId::error:: ${error.message}`);
      return null;
    });
  return result;
};

module.exports = {
  consulta,
  drop,
  add,
  updateById,
  consultaPorId,
};
