import DemoNavigator from "./components/Molecules/DemoNavigator";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Gateway from "./pages/Gateway";
import Pricing from "./pages/Pricing";
import Booking from "./components/Book Demo/Booking";
import MainWorkshop from "./components/Book Demo/MainWorkshop";
import Workshop from "./pages/Workshop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/business",
    element: <Booking />,
  },
  {
    path: "/workshop",
    element: <Workshop />,
  },
  {
    path: "/signup",
    element: (
      <div>
        <h1 className="text-5xl text-center font-bold underline">Jiffix Signup Page</h1>
        <DemoNavigator />
      </div>
    ),
  },
  {
    path: "/gateway",
    element: <Gateway />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

export default router;
