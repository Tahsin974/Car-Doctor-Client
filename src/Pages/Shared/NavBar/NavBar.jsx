import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo1.svg";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import useAuthContext from "../../../Context/useAuthContext";
const NavBar = () => {
  const { user,logOut } = useAuthContext();
  const navigate = useNavigate()
  const handleLogOut = () =>{
    logOut()
    .then(() => {
      navigate('/home')
    })
  }
  const navItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <HashLink to="/home#about">About</HashLink>
      </li>
      <li>
        <HashLink to="/home#services">Services</HashLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to='/mybookings'>My Bookings</Link>
          </li>
          <li>
            <Link to='/manageInventory'>Manage Inventory</Link>
          </li>
          
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost btn-sm">Log out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-white items-center  mb-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" className="max-h-[70px]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-bold text-lg items-center">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default NavBar;
