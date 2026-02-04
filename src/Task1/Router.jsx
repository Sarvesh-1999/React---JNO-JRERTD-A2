import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateUser from "./CreateUser";
import AllUsers from "./AllUsers";

// CREATE A ROUTE
const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <CreateUser />,
      },
      {
        path: "/all-emp",
        element: <AllUsers />,
      },
    ],
  },
]);

// PROVIDE A ROUTE
const Router = () => {
  return <RouterProvider router={myRoutes} />;
};
export default Router;
