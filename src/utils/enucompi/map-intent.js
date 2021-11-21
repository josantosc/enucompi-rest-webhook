/** @format */

const { INTENTS } = require("../constantes");
const { HORARIOS } = INTENTS;
const { getSechedules } = require("../../services/enucompi");

const mappedIntents = {
  [HORARIOS.CONSULTA]: getSechedules,
};

module.exports = { mappedIntents };
