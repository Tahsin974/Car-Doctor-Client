import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthContext from "../../Context/useAuthContext"
import swal from "sweetalert";

const CheckOut = () => {
  const { id } = useParams();
  const [service,setService] = useState({});
  const {user} = useAuthContext()
  const {title,price,_id,img} = service;
  const navigate = useNavigate();
  
  const baseUrl = "http://localhost:5000";
  useEffect(() => {
    fetch(`${baseUrl}/services/${id}`)
      .then((res) => res.json())
      .then((result) => setService(result));
  }, []);

  console.log(service)

  const handleBookService = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const serviceName = form.serviceName.value;
    const email = form.email.value;
    const description = form.description.value;


    const booking = {
      customerName: name,
      email,
      img,
      price,
      serviceName,
      serviceDate: date,
      serviceID : _id,
      description
    }

    fetch(`${baseUrl}/bookings`,{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        swal("Congratulations!", "Your Order Booked Successfully", "success")
        .then((value) => {
          if(value){
            navigate('/home')
        form.reset();
          }
        });
        
        


      }
    })
    
    
    
  }
  return (
    <div className="min-h-screen">
      <div className="card bg-[#F3F3F3]">
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        <div>
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
        </div>
          <div>
          <label className="label">
            <span className="label-text">Service Date</span>
          </label>
          <div className="form-control">
            <input
              type="date"
              placeholder="Service Date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          </div>
          <div>
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <div className="form-control">
            <input
              type="text"
              placeholder="Service Name"
              name="serviceName"
              defaultValue={title}
              className="input input-bordered"
              required
            />
          </div>
          </div>
          <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          </div>
        </div>
        <label className="label">
            <span className="label-text">Your Message</span>
          </label>
        <div className="form-control">
            <textarea
              type="text"
              placeholder="Your Message"
              name="description"
              className="textarea textarea-bordered h-[250px]"
             
            />
          </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] text-white">Order Confirm</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default CheckOut;
