import { useEffect, useState } from "react";
import Expert from "./Expert";

const Experts = () => {
    const [experts,setExperts] = useState([]);
    const baseUrl = 'experts.json'
    useEffect(()=>{
        fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(result => setExperts(result))
    },[])
    return (
        <div >
            <div className="text-center space-y-3">
                <h3 className="lg:text-3xl text-2xl text-red-500 font-bold">Team</h3>
                <h1 className="lg:text-5xl text-4xl font-bold">Meet Our Team</h1>
                <p className="capitalize ">
                the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which do not look even slightly believable. 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px] mb-[130px]">
                {
                    experts.map(expert => <Expert
                    key={expert.expert_id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
            
        </div>
    );
};

export default Experts;