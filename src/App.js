import { Routes, Route } from "react-router-dom";
import Addcolor from "./components/Addcolor";
import Home from "./components/Home";
import Color from "./components/Color";
import { useState } from "react";
import NotFound from "./components/Notfound";

function App() {
  const [selectColor, setSelectColor] = useState([
    { colorN: "red", colorV: "red" },
    { colorN: "green", colorV: "green" },
    { colorN: "blue", colorV: "blue" },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Home selectColor={selectColor} />} />
      <Route
        path="/colors/new"
        element={
          <Addcolor
            ColorSelector={selectColor}
            setColorSelector={setSelectColor}
          />
        }
      />
      <Route
        path="/colors/:color"
        element={<Color selectColor={selectColor} />}
      />
      <Route path="/colors//*" element={<NotFound />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
