import "./App.css";
import Navbar from "./components/Molecules/Navbar";
import Home from "./oldPages/Home";

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
