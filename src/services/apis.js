/** @format */

const axios = require("axios");

const enucompiURL = require("./urls/enucompi");

const apiEnucompi = axios.create({
  baseURL: enucompiURL,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
  auth: {
    username: process.env.USER,
    password: process.env.PASSWD,
  },
});

module.exports = {
  apiEnucompi,
};
