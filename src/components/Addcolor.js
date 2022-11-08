import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcolor = ({ ColorSelector, setColorSelector }) => {
  const [data, setData] = useState({ colorN: "", colorV: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setColorSelector([...ColorSelector, data]);
    navigate("/");
  };

  return (
    <div className="Container">
      <div className="SecondC">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Color name</label>
            <input
              onChange={(e) => setData({ ...data, colorN: e.target.value })}
              className="Input"
              type="text"
              placeholder="enter a name for the color"
            />
          </div>
          <div className="Val">
            <label htmlFor="">Color value</label>
            <input
              onChange={(e) => setData({ ...data, colorV: e.target.value })}
              type="color"
            />
          </div>
          <button className="Add">Add this color</button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
