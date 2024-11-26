import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../layout/MainLayOuts";
import AddCoffee from "../pages/AddCoffee";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
]);

export default Router;
