/** @format */

const { INTENTS } = require("../constantes");
const { HORARIOS } = INTENTS;
const { getSechedules, postAppointment } = require("../../services/enucompi");

const mappedIntents = {
  [HORARIOS.CONSULTA]: getSechedules,
  [HORARIOS.AGENDAMENTO]: postAppointment,
};

module.exports = { mappedIntents };
