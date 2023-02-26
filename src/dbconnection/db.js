const mongoose = require('mongoose');
const logger = require("pino")();
const URL = "mongodb+srv://cristianrodri:n5Wi0teMNpZiJuTk@cluster0.hrxzunb.mongodb.net/HCC_API"
//configuracion mongoose
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(URL, {useUnifiedTopology: true})
const db = mongoose.connection;

db.once('open', function (){
    logger.info('DB Start');
})

db.on('error', function (){
    logger.info(`Error en la conexión a BD:: ${err}`);
});

const closeConnection = function (){
    db.close(function(){
        logger.info(`DB Close`);
    });
}

module.exports = {
    closeConnection,
    db
}
