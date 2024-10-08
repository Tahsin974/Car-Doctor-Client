import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div  className="max-w-7xl mx-auto" >
            <NavBar></NavBar>
            <Outlet></Outlet>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;