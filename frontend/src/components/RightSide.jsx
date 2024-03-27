import React, { useContext } from "react";
import WetherCard from "./WetherCard";
import { allContext } from "../context";

function RightSide() {
  const { APIdata } = useContext(allContext);

  return (
    <div className="rightSideContainer centerFlex">
      <div className="blurCard">
        {APIdata?.status == 200 && APIdata !== null ? (
          <WetherCard APIdata={APIdata} />
        ) : null}
      </div>
    </div>
  );
}

export default RightSide;
