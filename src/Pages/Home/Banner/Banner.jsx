
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import banner1 from "../../../assets/images/homeCarousel/1.jpg";
import banner2 from "../../../assets/images/homeCarousel/2.jpg";
import banner3 from "../../../assets/images/homeCarousel/3.jpg";
import banner4 from "../../../assets/images/homeCarousel/4.jpg";


const Banner = () => {
  return (
    <>
      <div className="carousel h-full w-full rounded-xl">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={banner1}
            className="w-full"
          />
          <div className="absolute flex items-center left-0  lg:pl-28 md:pl-14 pl-8 pr-2  lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151510] to-[#15151500]">
            <div className="text-white lg:space-y-7 space-y-1">
              <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
              Affordable Price For Car Servicing
              </h1>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm  text-white  bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500">Discover More</button>

              <button className="btn btn-outline text-white border-white  lg:btn-md md:btn-md btn-sm">Latest Project</button>

              </div>
            
            </div>

            
          </div>
          <div className="absolute left-5 right-5 bottom-0 lg:flex md:flex sm:flex hidden -translate-y-1/2 transform justify-end">
            <HashLink to="#slide4" className="btn btn-circle btn-neutral mr-4">
              ❮
            </HashLink>
            <HashLink to="#slide2" className="btn btn-circle btn-error">
              ❯
            </HashLink>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src={banner2}
            className="w-full"
          />
          <div className="absolute flex items-center left-0  lg:pl-28 md:pl-14 pl-8 pr-2  lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="text-white lg:space-y-7 space-y-1">
              <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
              Affordable Price For Car Servicing
              </h1>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm  text-white  bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500">Discover More</button>

              <button className="btn btn-outline text-white border-white  lg:btn-md md:btn-md btn-sm">Latest Project</button>

              </div>
            
            </div>

            
          </div>
          <div className="absolute left-5 right-5 bottom-0 lg:flex md:flex sm:flex hidden -translate-y-1/2 transform justify-end">
            <HashLink to="#slide1" className="btn btn-circle btn-neutral mr-4">
              ❮
            </HashLink>
            <HashLink to="#slide3" className="btn btn-circle btn-error">
              ❯
            </HashLink>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img
           src={banner3}
            className="w-full"
          />
          <div className="absolute flex items-center left-0  lg:pl-28 md:pl-14 pl-8 pr-2  lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="text-white lg:space-y-7 space-y-1">
              <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
              Affordable Price For Car Servicing
              </h1>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm  text-white  bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500">Discover More</button>

              <button className="btn btn-outline text-white border-white  lg:btn-md md:btn-md btn-sm">Latest Project</button>

              </div>
            
            </div>

            
          </div>
          <div className="absolute left-5 right-5 bottom-0 lg:flex md:flex sm:flex hidden -translate-y-1/2 transform justify-end">
            <HashLink to="#slide2" className="btn btn-circle btn-neutral mr-4">
              ❮
            </HashLink>
            <HashLink to="#slide4" className="btn btn-circle btn-error">
              ❯
            </HashLink>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
           src={banner4}
            className="w-full"
          />
          <div className="absolute flex items-center left-0  lg:pl-28 md:pl-14 pl-8 pr-2  lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="text-white lg:space-y-7 space-y-1">
              <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
              Affordable Price For Car Servicing
              </h1>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm  text-white  bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500">Discover More</button>

              <button className="btn btn-outline text-white border-white  lg:btn-md md:btn-md btn-sm">Latest Project</button>

              </div>
            
            </div>

            
          </div>
          <div className="absolute left-5 right-5 bottom-0 lg:flex md:flex sm:flex hidden -translate-y-1/2 transform justify-end">
            <HashLink to="#slide3" className="btn btn-circle btn-neutral mr-4">
              ❮
            </HashLink>
            <HashLink to="#slide1" className="btn btn-circle btn-error">
              ❯
            </HashLink>
          </div>
        </div>
        
        
        
      </div>
    </>
  );
};

export default Banner;


