import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "../../../assets/logo2.svg";
const Footer = () => {
  return (
    <footer className="footer bg-neutral-950 text-neutral-content p-10">
      <aside>
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br /> trainer who is also a serial .
        </p>
        <nav className="grid grid-cols-4 gap-2">
          <button className="btn btn-circle bg-neutral-900	 border-neutral-900	 hover:bg-neutral-900	 hover:border-neutral-900	 text-white">
          <FaGoogle />

          </button>
          <button className="btn btn-circle bg-neutral-900	 border-neutral-900	 hover:bg-neutral-900	 hover:border-neutral-900	 text-white">
          <FaTwitter />


          </button>
          <button className="btn btn-circle bg-neutral-900	 border-neutral-900	 hover:bg-neutral-900	 hover:border-neutral-900	 text-white">
          <FaInstagram/>


          </button>
          <button className="btn btn-circle bg-neutral-900	 border-neutral-900	 hover:bg-neutral-900	 hover:border-neutral-900	 text-white">
          <FaLinkedin />


          </button>
        </nav>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
