import { useEffect, useState } from "react";
import MyBookingsRow from "./MyBookingsRow";
import swal from "sweetalert";

const ManageInventory = () => {
  const [allBookings, setAllBookings] = useState([]);

  const baseUrl = "http://localhost:5000";
  useEffect(() => {
    fetch(`${baseUrl}/bookings`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this users Booking!",
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
            swal("Poof! Your User's Booking has been deleted!", {
              icon: "success",
            });
            const remaining = allBookings.filter(booking => booking._id !== id)
            setAllBookings(remaining)
          }
        })
        
      } else {
        swal("Your Booking is safe!");
      }
    });
  }

  console.log(allBookings)
  return <div>
    <div className="min-h-screen">
      
      <div className="overflow-x-auto my-32">
        <table className="table">
          {/* head */}
          
          <tbody>
            {/* row 1 */}
            {
                allBookings.map(booking  => <MyBookingsRow
                key={booking._id}
                booking = {booking}
                handleDelete = {handleDelete}
                
                ></MyBookingsRow>)
            }
            
          </tbody>
          
        </table>
      </div>
    </div>
  </div>;
};

export default ManageInventory;
