import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AuthProvider from "../Provider/AuthProvider/AuthProvider";
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'


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
      ]
    },
  ]);

export default router;