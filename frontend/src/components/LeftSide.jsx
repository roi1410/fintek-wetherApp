import { useContext } from "react";
import "../css/leftSide.css";
import logo from "../assets/logo.png";
import { allContext } from "../context";

function Leftside() {
  const { handleSubmit, APIdata, inputRef } = useContext(allContext);

  return (
    <div className="leftSideContainer centerFlex">
      <img className="logo" src={logo} alt="" />
      <p>
        Use our weather app <br /> to see the weather <br /> around the world
      </p>{" "}
      <label>
        {APIdata?.response?.data?.status == 400 && APIdata !== null ? (
          <span className="error"> place dont find </span>
        ) : null}
        <span>City name</span>
        <input ref={inputRef} type="text" className="input" />
        <button
          className="btnPrimary"
          onClick={() => handleSubmit(inputRef.current.value)}
        >
          Check
        </button>
      </label>
    </div>
  );
}

export default Leftside;
