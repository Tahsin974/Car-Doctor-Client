import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Expert = ({expert}) => {
    const {name,img,expertize} = expert;
    return (
        <div className="card bg-white shadow-xl border border-[#E8E8E8]">
      <figure className="p-[25px]">
        <img
          src={img}
          alt="Products"
          className="w-full  rounded-2xl"
        />
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="font-bold text-[#737373] text-lg">{expertize}</p>

        <nav className="grid grid-cols-4 gap-x-2 ">
          <button className="btn btn-circle bg-[#395185]	 border-[#395185]	 hover:bg-[#395185]	 hover:border-[#395185]	text-lg text-white">
          <FaFacebookF />


          </button>
          <button className="btn btn-circle bg-[#55ACEE]	 border-[#55ACEE]	 hover:bg-[#55ACEE]	 hover:border-[#55ACEE]	text-lg text-white">
          <FaTwitter />


          </button>
          <button className="btn btn-circle border-orange-500 text-white text-lg"
          style={{
            background:'linear-gradient(150deg, #774ADF 3.9%, #9748BE 14.95%, #BD4697 30.43%, #D8447A 44.65%, #E94369 57%, #EF4363 66.1%, #EF545E 72.21%, #F08053 84.3%, #F2C141 100%)'
          }}
          >
          <FaInstagram/>


          </button>
          <button className="btn btn-circle bg-[#0A66C2]	 border-[#0A66C2]	 hover:bg-[#0A66C2]	 hover:border-[#0A66C2] text-lg	 text-white">
          <FaLinkedin />


          </button>
        </nav>
    
      </div>
    </div>
    );
};

export default Expert;