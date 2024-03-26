const axios = require("axios");

const rapidKey = "b32a70783amshfaeb6cd47295148p13be8djsn7113d5289dd4";

async function fetchData(query) {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=343f7adfef5c4f6bb48133129242503&q=${query}&aqi=no`
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

