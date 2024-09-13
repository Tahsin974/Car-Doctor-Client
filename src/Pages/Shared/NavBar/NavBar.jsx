import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.svg'
const NavBar = () => {
  const navItems = <>
  <li>
      <Link>Home</Link>
  </li>
  <li>
      <Link>About</Link>
  </li>
  <li>
      <Link>Services</Link>
  </li>
  <li>
      <Link>Blog</Link>
  </li>
  <li>
      <Link>Contact</Link>
  </li>
  </>
  return (
    <div className="navbar bg-white  mb-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
          >
            {navItems}
            
          </ul>
        </div>
        <Link >
        <img src={logo} alt="" className='max-h-[70px]' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:items-center">
        <ul className="menu menu-horizontal px-1 font-bold text-lg">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white">Appointment</button>

      </div>
    </div>
  );
};

export default NavBar;
