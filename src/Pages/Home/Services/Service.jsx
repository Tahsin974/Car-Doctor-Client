import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({service}) => {
    const {title,price,img} = service;
  return (
    <div className="card bg-white shadow-xl border border-[#E8E8E8]">
      <figure>
        <img
          src={img}
          alt="Services"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="font-bold text-red-500 text-lg">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="text-red-500 text-lg">
          <FaArrowRightLong />


          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
