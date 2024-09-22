import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Context/useAuthContext";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuthContext();
    const location = useLocation();

    if(loading){
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-[#FF3811]"></span>

        </div>
    }
    if(user?.email){
        return children
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;