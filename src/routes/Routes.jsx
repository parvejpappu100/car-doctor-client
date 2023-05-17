import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "singUp",
          element: <SingUp></SingUp>
        },
        {
          path: "/checkOut/:id",
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

export default router;