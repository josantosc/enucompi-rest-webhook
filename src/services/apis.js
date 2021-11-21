/** @format */

const axios = require("axios");

const enucompiURL = require("./urls/enucompi");

const apiEnucompi = axios.create({
  baseURL: enucompiURL,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

module.exports = {
  apiEnucompi,
};
