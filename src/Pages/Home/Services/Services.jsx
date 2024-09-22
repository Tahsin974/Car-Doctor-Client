import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services,setServices] = useState([]);
    const baseUrl = 'http://localhost:5000'
    useEffect(()=>{
        fetch(`${baseUrl}/services`)
        .then(res => res.json())
        .then(result => setServices(result))
    },[])
    return (
        <div >
            <div id="services" className="text-center space-y-3">
                <h3 className="lg:text-3xl text-2xl text-red-500 font-bold">Services</h3>
                <h1 className="lg:text-5xl text-4xl font-bold">Our Service Area</h1>
                <p className="capitalize ">
                the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which do not look even slightly believable. 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[50px]">
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white">More Services</button>

            </div>
            
        </div>
    );
};

export default Services;