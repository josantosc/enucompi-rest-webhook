/** @format */

const API_PATH = "/api/webhook";
const V1 = `${API_PATH}/v1`;

const INTENTS = {
  HORARIOS: {
    CONSULTA: "3.0.0.0-[hook]-nao-possui-medico",
  },
};

const PARAMETERS = { HORARIOS: "horarios-disponiveis" };

const EVENTS = { HORARIOS: "ENVT-HORAIOS-DISPONIVEIS" };

const ROUTES = { BASE: process.env.BASE };

module.exports = { V1, API_PATH, INTENTS, PARAMETERS, EVENTS, ROUTES };
