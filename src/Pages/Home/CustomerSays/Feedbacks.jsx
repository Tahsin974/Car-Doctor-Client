import { useEffect, useState } from "react";
import Feedback from "./feedback";



const Feedbacks = () => {
    const [feedbacks,setFeedbacks] = useState([]);
    const baseURL = 'feedbacks.json'
    useEffect(() => {
        fetch(`${baseURL}`)
        .then(res => res.json())
        .then(result => setFeedbacks(result))

    },[])
    
    return (
        <div className="my-32">
      <div className="text-center space-y-3">
        <h3 className="lg:text-3xl text-2xl text-red-500 font-bold">Testimonial</h3>
        <h1 className="lg:text-5xl text-4xl font-bold">What Customer Says</h1>
        <p className="capitalize ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
                {
                    feedbacks.map(feedback => <Feedback
                    key={feedback.id}
                    feedback={feedback}
                    ></Feedback>)
                }
            </div>
            

      
    </div>
    );
};

export default Feedbacks;