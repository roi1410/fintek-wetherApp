import axios from "axios";

export async function fetchWetherData(query) {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/wetherApp/sendDataWetherData?query=${query}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
