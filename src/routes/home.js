/** @format */

const home = (req, res) => {
  const response = {
    status: 200,
    message: "Webhook - Hospital Enucompi",
  };
  return res.status(200).send(response);
};

module.exports = [home];
