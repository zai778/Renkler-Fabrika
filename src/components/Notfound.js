import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
export default function NotFound() {
  return (
    <div>
      <section
        style={{
          color: "red",
          fontSize: "50px",
          textAlign: "center",
          position: "absolute",
          top: "0",
        }}
      >
        {" "}
        <Typewriter
          options={{
            strings: ["404 - Not Found! ,go Home (Asshole)"],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
      </section>
      <div style={{ marginTop: "100px" }}>
        {" "}
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}
