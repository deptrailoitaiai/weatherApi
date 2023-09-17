const bodyParser = require("body-parser");
const axios = require("axios");

module.exports.homeControllers = async function (req, res) {
  try {
    const cityInput = req.body.cityInput;

    const getData = async (params) => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params });
      return response.data;
    };

    const response = await getData({
      q: `${cityInput}`,
      appid: process.env.API_KEY,
      units: "metric",
      lang: "vi",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
