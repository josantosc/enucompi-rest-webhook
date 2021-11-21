/** @format */

const formatDate = (input) => {
  const [dateFormat] = input.split(/["T"|\s]/);

  const getNumbers = dateFormat.replace(/\D/g, "");

  const result = getNumbers.replace(/(\d{4})?(\d{2})?(\d{2})/, "$3/$2/$1");

  return result;
};

const mountResponse = (data) => {
  const mount = data.map((el, i) => {
    const mount = ` ${i + 1}: ${el}`;
    return mount;
  });

  const parserStrint = mount.toString();
  const response = parserStrint.split(",").join("\n");
  return response;
};

const buildTemplate = (data) => {
  const params = data.map((el, i) => {
    const date = formatDate(el.date);
    const nome = el.doctor;
    const hora = el.hr;
    const a = `${date} ${hora} ${nome} `;
    return a;
  });

  return params;
};

module.exports = { buildTemplate, mountResponse };
