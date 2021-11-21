/** @format */

const { EVENTS, PARAMETERS, ROUTES } = require("../utils/constantes");
const { buildEvent } = require("../utils/intents");
const { apiEnucompi } = require("./apis");
const {
  buildTemplate,
  mountResponse,
} = require("../utils/enucompi/format-response");

const getSechedules = async (req, res) => {
  const params = req.body.queryResult.parameters;

  // const responSechedules = Object.values(params);

  const { data } = await apiEnucompi.get(`${ROUTES.BASE}`);

  const resultSechedules = buildTemplate(data);

  const formarToDialogflow = mountResponse(resultSechedules);

  const paramtrs = {
    [PARAMETERS.HORARIOS]: formarToDialogflow,
  };

  console.log(paramtrs);

  return buildEvent(EVENTS.HORARIOS, paramtrs);
};

module.exports = { getSechedules };
