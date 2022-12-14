import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";
import DemoNavigator from "./components/Molecules/DemoNavigator";
import Navbar from "./components/Molecules/Navbar";
import Home from "./pages/Home";
import Booking from "./components/Book Demo/Booking";
import Workshop from "./components/Workshop/Workshop";

function App() {
  return (
    <div className="App">
   <Navbar/>
      {/* <DemoNavigator /> */}
      <Home/>
       {/* <Booking/>  */}
      {/* <Workshop/> */}
    </div>
  );
}

export default App;
