import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
const Home = ({ selectColor }) => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="Container">
        <h2 className="Title">Welcome to the color factory</h2>
        <h1
          style={{ cursor: "pointer" }}
          className="TitleA"
          onClick={() => navigate("/colors/new")}
        >
          Add a color
        </h1>
      </div>
      <div className="Holder">
        <h3 className="TitleS">Please select a color</h3>
        {selectColor.map((item, i) => (
          <Link to={`/colors/${item.colorN}`} key={i}>
            <p className="underlined">{item.colorN}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
