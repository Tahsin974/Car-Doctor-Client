import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className=" bg-neutral-950 text-neutral-content rounded-lg p-10 my-32 grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-5 ">
      <div className="flex  items-center">
        <div className="text-4xl mr-4">
        <FaCalendarAlt />

        </div>
        <div className="text-center">
            <p className="text-red-500">We are open monday-friday</p>
            <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
        </div>

      </div>
      <div className="flex  items-center">
        <div className="text-4xl mr-4">
        <FaPhoneVolume />


        </div>
        <div className="text-center">
            <p className="text-red-500">Have a question?</p>
            <h4 className="text-2xl font-bold">+8801795981096</h4>
        </div>

      </div>
      <div className="flex  items-center">
        <div className="text-4xl mr-4">
        <ImLocation2/>


        </div>
        <div className="text-center">
            <p className="text-red-500">Need a repair? our address</p>
            <h4 className="text-2xl font-bold">Mirpur-1, Dhaka-1216</h4>
        </div>

      </div>
      
      
    </div>
  );
};

export default Contact;
