import React from "react";
import "../css/wetherCard.css";
function WetherCard({ APIdata }) {
  console.log(APIdata);
  return (
    <div className="wetherCard centerFlex ">
      <div className="wetherCardHederContainer">
        <h1 className="lightRgular">{APIdata?.name}</h1>
        <span className="lightFont">{APIdata?.country}</span>
        <span className="lightFont">{APIdata?.time}</span>
      </div>
      <div>
        <h1 className="wetherCardTemp lightRgular ">
          {Math.round(APIdata?.degrees)}°
        </h1>
        {/* fix skyDescription  */}
        <span className="skyDescription ">{APIdata?.skyDescription}</span>
      </div>
      <div className="wetherDetails ">
        <div className="wetherDetailsBlock">
          <div className="lightFont">precipitation</div>
          <span className="lightRgular">{APIdata?.precipitation}mm</span>
        </div>
        <div className="wetherDetailsBlock">
          <div className="lightFont"> humidity</div>
          <span className="lightRgular">{APIdata?.humidity}%</span>
        </div>
        <div className="wetherDetailsBlock">
          <div className="lightFont">wind</div>
          <span className="lightRgular">{APIdata?.wind} km/h</span>
        </div>
      </div>

      <div className="hoursContainer">
        {APIdata?.hour&&APIdata?.hour.map((elm, index) => {
          return (
            <div key={index} className="wetherDetailsBlock">
              <span className="lightFont">{elm?.time.substring(11, 16)}</span>
              <span className="lightRgular">{Math?.round(elm.temp_c)}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WetherCard;
