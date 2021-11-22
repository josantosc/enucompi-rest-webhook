/** @format */

const mountResponse = (data) => {
  const mount = data.map((el, i) => {
    const mount = `${el}`;
    return mount;
  });

  const parserStrint = mount.toString();
  const response = parserStrint.split(",").join("\n");
  return response;
};

const buildTemplate = (data) => {
  const params = data.map((el, i) => {
    const code = el.code;
    const date = el.date;
    const nome = el.doctor;
    const hora = el.hour;

    const result = `código: ${code} - dia: ${date} horário: ${hora} ${nome} `;
    return result;
  });

  return params;
};

module.exports = { buildTemplate, mountResponse };
