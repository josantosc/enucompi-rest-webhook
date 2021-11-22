/** @format */

const API_PATH = "/api/webhook";
const V1 = `${API_PATH}/v1`;

const INTENTS = {
  HORARIOS: {
    CONSULTA: "3.0.0.0-[hook]-buscar-horarios",
    AGENDAMENTO: "3.0.0.2-[hook]-agenda-consulta",
  },
};

const PARAMETERS = {
  HORARIOS: "horarios-disponiveis",
  HORARIO_AGENDAMENTO: "hour",
  DATA_AGENDAMENTO: "date",
  CPF: "cpf",
  MEDICO_REPSONSAVEL: "doctor",
  NOME_PACIENTE: "patiente",
  CODIGO_HORARIO: "code",
};

const EVENTS = {
  HORARIOS: "ENVT-HORAIOS-DISPONIVEIS",
  AGENDADO: "EVENT-PACIENTE-AGENDADO",
};
const PATHS = { SCHEDULES: "code" };

const ROUTES = {
  BASE_SCHEDULES: process.env.BASE_SCHEDULES,
  BASE_SCHEDULES_ID: process.env.BASE_SCHEDULES_ID,
  BASE_APPOINTMENT: process.env.BASE_APPOINTMENT,
};

module.exports = { V1, API_PATH, INTENTS, PARAMETERS, EVENTS, ROUTES, PATHS };
