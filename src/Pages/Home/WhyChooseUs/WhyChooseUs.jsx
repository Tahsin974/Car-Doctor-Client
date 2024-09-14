import { useEffect, useState } from "react";

const WhyChooseUs = () => {
    const [supports,setSupports] = useState([]);
    const baseURL = 'supports.json'
    useEffect(() => {
        fetch(`${baseURL}`)
        .then(res => res.json())
        .then(result => setSupports(result))

    },[])
  return (
    <div className="my-32">
      <div className="text-center space-y-3">
        <h3 className="lg:text-3xl text-2xl text-red-500 font-bold">Core Features</h3>
        <h1 className="lg:text-5xl text-4xl font-bold">Why Choose Us</h1>
        <p className="capitalize ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-1 gap-y-5 mt-[50px] justify-items-center">
        {
            supports.map(support =><div key={support.id} className={`card w-[210px]  shadow-xl pt-5 items-center border`}
            style={{background: support.background , color:support.color}}
            >
          <figure >
            <img
              src={support.img}
              
            />
          </figure>
          <div className="card-body  text-center">
            <h2 className="card-title">{support.name}</h2>
            
        
          </div>
        </div>
            )
        }
        
      </div>
    </div>
  );
};

export default WhyChooseUs;
