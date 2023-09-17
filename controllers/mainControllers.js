require("dotenv").config();

module.exports.mainControllers_axious = async function (req, res) {
  try {
    const receivedData = await req.session.myData;
    res.render('main', {
      css: `main.css`,
      location: `${receivedData.name}`, 
      windSpeed: `${receivedData.wind.speed}`,
      temperature: `${receivedData.main.temp}`,
      maxTemp: `${receivedData.main.temp_max}`,
      minTemp: `${receivedData.main.temp_min}`,
    });
  } catch (error) {
    throw error;
  }
};
