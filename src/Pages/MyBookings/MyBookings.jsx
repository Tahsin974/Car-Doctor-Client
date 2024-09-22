import { useEffect, useState } from "react";
import useAuthContext from "../../Context/useAuthContext";
import MyBookingsRow from "./MyBookingsRow";
import swal from "sweetalert";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuthContext();
  const baseUrl = "http://localhost:5000";
  useEffect(() => {
    fetch(`${baseUrl}/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Booking!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`${baseUrl}/bookings/${id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
          if(result.deletedCount > 0){
            swal("Poof! Your Booking has been deleted!", {
              icon: "success",
            });
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        })
        
      } else {
        swal("Your Booking is safe!");
      }
    });
  }

  const handleApprove = id =>{
    fetch(`${baseUrl}/bookings/${id}` , {
      method:'PATCH',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status : 'approved'})

    })
    .then(res => res.json())
    .then(result => {
      if(result.modifiedCount > 0){
        swal("Your Booking has been approved!", {
          icon: "success",
        });
        const remaining = bookings.filter(booking => booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'approved'
        const newBookings = [updated,...remaining];
        setBookings(newBookings)
      }
    })
  }
  return (
    <div className="min-h-screen">
      
      <div className="overflow-x-auto my-32">
        <table className="table">
          {/* head */}
          
          <tbody>
            {/* row 1 */}
            {
                bookings.map(booking  => <MyBookingsRow
                key={booking._id}
                booking = {booking}
                handleDelete = {handleDelete}
                handleApprove = {handleApprove}
                ></MyBookingsRow>)
            }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
