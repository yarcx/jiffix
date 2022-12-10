import DemoNavigator from "./components/Molecules/DemoNavigator";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Gateway from "./Pages/Gateway";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <div>
        <h1 className="text-5xl text-center font-bold underline">Jiffix Login Page</h1>
        <DemoNavigator />
      </div>
    ),
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
]);

export default router;
