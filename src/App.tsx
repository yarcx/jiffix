import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";
import DemoNavigator from "./components/Molecules/DemoNavigator";

function App() {
  return (
    <div className="App font-monts">
      <h1 className="text-5xl text-center font-bold underline">Jiffix APP</h1>

      <DemoNavigator />
    </div>
  );
}

export default App;
