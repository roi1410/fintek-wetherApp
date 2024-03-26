const axios = require("axios");
const { json } = require("body-parser");

const rapidKey = "b32a70783amshfaeb6cd47295148p13be8djsn7113d5289dd4";
const today = parseInt(new Date().toISOString().substring(11, 13));
let naw;
if (parseInt(today) < 19) {
  naw = today;
} else {
  naw = 18;
}

async function fetchData(query) {
  try {
    
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=343f7adfef5c4f6bb48133129242503&q=${query}&days=1&aqi=no&alerts=no`
    );
  

    const { forecast, current, location } = response.data;

    return {
      status: response.status,
      hour: forecast.forecastday[0].hour.slice(naw, naw + 5),
      degrees: current?.temp_c,
      skyDescription: current?.condition?.text,
      precipitation: current?.precip_mm,
      humidity: current?.humidity,
      wind: current?.wind_kph,
      time: location?.localtime,
      country: location?.country,
      name: location?.name,
    };
  } catch (error) {
    console.log(error.message);
    return { status: error?.response?.status };
  }
}
exports.sendWether = async (req, res) => {
  try {
    const { query } = req.query;

    const DataWether = await fetchData(query);
  
    if (DataWether?.status === 200) {
      res.status(200).json(DataWether);
    } else if (DataWether?.status === 400) {
      res.status(400).json({ message: "place dont found ", status: 400 });
    } else {
      res
        .status(401)
        .json({ message: "something went wrong ", status: DataWether?.status });
    }
  } catch (error) {
    console.log(error.message);
  }
};
