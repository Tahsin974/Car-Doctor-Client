import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../Context/useAuthContext";
const Login = () => {
  const {googleSignIn,userSignIn,setUser} = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const loginWithGoogle = () => {
    
    googleSignIn()
    .then((result) => {
      setUser(result.user)
      navigate(location.state ? location.state :'/home')
    });
  }
    const handleLogin = event => {
      event.preventDefault()
      const form = event.target;
     
      const email = form.email.value;
      const password = form.password.value;
      userSignIn(email,password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        setUser(user)
        console.log("LogIn",user)
        navigate(location.state ? location.state :'/home')
    
      })
      .catch((error) => {
        console.log(error.message);
      });

      form.reset()
      
    }
  return (
    <div className="hero bg-white min-h-screen items-center my-6">
      <div className="hero-content grid lg:grid-cols-2 lg:gap-x-11 gap-y-11">
        <div className="w-4/5">
          <img src={img} alt="" />
        </div>
        <div className="card bg-white w-full flex-shrink-0 shadow-2xl border">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl font-semibold text-center mb-8">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-[#FF3811] bg-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] text-white">
                Login
              </button>
              <div className="divider">Or Sign In with</div>
              <div className="flex justify-center space-x-4 my-5">
          <button className="btn btn-circle text-lg text-[#395185] hover:text-[#395185]">
          <FaFacebookF />
          </button>
          <button className="btn btn-circle text-lg	 text-[#0A66C2] hover:text-[#0A66C2]">
          <FaLinkedin />


          </button>
          <button onClick={loginWithGoogle} className="btn btn-circle text-lg">
          <FcGoogle />



          </button>
        </div>
            </div>
          </form>
          <div className="flex justify-center mb-5">
          <p>Have an account? <Link to='/signUp' className="link link-hover text-[#FF3811] font-semibold">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
