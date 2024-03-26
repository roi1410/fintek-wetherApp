import { createContext, useEffect, useRef, useState } from "react";
import { fetchWetherData } from "./utils/wetherData";
import useGeoLocation from "./hooks/useGeoLocation";

export const allContext = createContext({
  test: "",
  setAPIdata: () => {},
  APIdata: {},
  handleSubmit: () => {},
  inputRef: {},
});
const MainContext = ({ children }) => {
  const [APIdata, setAPIdata] = useState(null);

  const inputRef = useRef();

  async function handleSubmit(query) {
    console.log(query);
    const data = await fetchWetherData(query);
    setAPIdata(data);
  }
  useEffect(() => {
    if (APIdata !== null && APIdata?.response?.data?.status !== 400) {
      sessionStorage.setItem("wetherData", JSON.stringify(APIdata));
    }
  }, [APIdata]);

  const location = useGeoLocation();
  useEffect(() => {
    if (location.loaded && !location.error) {
      const { lat, lng } = location.coordinates;
      handleSubmit(`${lat} ${lng}`);
      console.log(lat);
    }
  }, [location]);

  return (
    <allContext.Provider
      value={{ setAPIdata, APIdata, handleSubmit, inputRef }}
    >
      {children}
    </allContext.Provider>
  );
};
export default MainContext;
