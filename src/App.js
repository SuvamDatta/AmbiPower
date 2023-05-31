import "./App.css";
import "./Images/ambulancegiphy.gif";
import { useRef } from "react";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <div className="App">
      <div className="App-header">
        <div className="blank"></div>
        <text className="text">AmbiPower Super-Service</text>
      </div>
      <div
        className="centerlogo"
        width={windowSize.current[0] * 0.6}
        height={windowSize.current[1] * 0.6}
      >
        <img src={require("./Images/ambulancegiphy.gif")} />
      </div>
      <text className="boldtext">Ambulance at your door-step!</text>
      <br />
      <br />
      <br />
      <button className="box" type="submit" onClick={shoot}>
        <text className="Logintext">Login to Explore</text>
        <img className="rightarrow" src={require("./Images/rightArrow.png")} />
      </button>
      
    </div>
  );
}

export default App;
