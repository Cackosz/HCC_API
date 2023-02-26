const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Paciente = new Schema({
  id: {
    type: String,
  },
  nombreCompleto: {
    type: String,
  },
  edad: {
    type: Number,
  },
  tel: {
    type: Number
  }
});

module.exports = mongoose.model('Pacientes', Paciente);