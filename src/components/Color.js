import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Color = ({ selectColor }) => {
  const { color } = useParams();

  const navigate = useNavigate();

  const Newcolor = selectColor.filter((item) => item.colorN === color)[0];

  return (
    <div style={{ backgroundColor: `${Newcolor.colorV}` }} className="New">
      <div className="Addbox">
        <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "900" }}>
          THIS IS {Newcolor.colorN.toUpperCase()}
        </p>
        <div
          style={{
            padding: 55,
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "900",
            height: "100%",
          }}
        >
          {" "}
          <Typewriter
            options={{
              strings: [
                "It's not beutiful So goodluck next time(you dumass).  ",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </div>
        <button className="Back" onClick={() => navigate("/")}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Color;
