import "./App.css";
import Navbar from "./components/Molecules/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App font-monts">
      <Navbar />
      {/* <DemoNavigator /> */}
      <Home />
    </div>
  );
}

export default App;
