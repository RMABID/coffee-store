import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../layout/MainLayOuts";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/coffee/add",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/coffee/details/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/coffee/update/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);

export default Router;
