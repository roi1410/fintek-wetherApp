import axios from "axios";

export async function fetchWetherData(query) {
  try {
 
    const response = await axios.get(
      `https://fintek-wetherapp.onrender.com/api/wetherApp/sendDataWetherData?query=${query}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
