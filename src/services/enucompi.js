/** @format */

const { EVENTS, PARAMETERS, ROUTES } = require("../utils/constantes");
const {
  buildEvent,
  extractParameterOutputContext,
} = require("../utils/intents");
const { apiEnucompi } = require("./apis");
const {
  buildTemplate,
  mountResponse,
} = require("../utils/enucompi/format-response");

const getSechedules = async (req, res) => {
  const { data } = await apiEnucompi.get(`${ROUTES.BASE_SCHEDULES}`);

  const resultSechedules = buildTemplate(data);

  const formarToDialogflow = mountResponse(resultSechedules);

  const paramtrs = {
    [PARAMETERS.HORARIOS]: formarToDialogflow,
  };

  return buildEvent(EVENTS.HORARIOS, paramtrs);
};

const postAppointment = async (req, res) => {
  const cfpPatiente = extractParameterOutputContext(req.body, PARAMETERS.CPF);
  const namePatiente = extractParameterOutputContext(
    req.body,
    PARAMETERS.NOME_PACIENTE
  );

  const id_hour = extractParameterOutputContext(
    req.body,
    PARAMETERS.CODIGO_HORARIO
  );

  const { data } = await apiEnucompi.get(
    `${ROUTES.BASE_SCHEDULES_ID}${id_hour}`
  );

  const paramsContext = data.reduce((acc, cur) => Object.assign(acc, cur));
  const { code, date, hour, doctor } = paramsContext;
  const infoPatiente = {
    data: {
      id_hour: code,
      cpf: cfpPatiente,
      patiente: namePatiente,
      doctor: doctor,
      date: date,
      hour: hour,
    },
  };

  await apiEnucompi.post(`${ROUTES.BASE_APPOINTMENT}`, infoPatiente);

  const paramtrs = {
    [PARAMETERS.MEDICO_REPSONSAVEL]: doctor,
    [PARAMETERS.DATA_AGENDAMENTO]: date,
    [PARAMETERS.HORARIO_AGENDAMENTO]: hour,
  };

  return buildEvent(EVENTS.AGENDADO, paramtrs);
};

module.exports = { getSechedules, postAppointment };
