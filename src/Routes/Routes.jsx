import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AuthProvider from "../Provider/AuthProvider/AuthProvider";
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import ManageInventory from "../Pages/ManageInventory/ManageInventory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProvider>
        <Main></Main>
      </AuthProvider>,
      children : [
        {
          path : '/',
          element: <Home></Home>
        },
        {
          path : '/home',
          element: <Home></Home>
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path : '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path : '/checkout/:id',
          element: <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
          
        },
        {
          path : '/mybookings',
          element: <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
          
        },
        {
          path : '/manageInventory',
          element: <ManageInventory></ManageInventory>
        },
      ]
    },
  ]);

export default router;