import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {

    axios.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Deleted Successfully.')
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
        }
    })
  }

  const handleUpdateConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
       if(data.modifiedCount > 0){
        const remaining = bookings.filter(booking => booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'Confirm'
        const newBookings = [updated, ...remaining]
        setBookings(newBookings)
       }
    })
  }

 

  return (
    <div className="my-10"> 
      <h1>My Bookings: {bookings.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           
           {
            bookings.map(booking => <BookingRow 
                key={booking._id}
                handleDelete= {handleDelete}
                handleUpdateConfirm={handleUpdateConfirm}
                booking={booking}></BookingRow>)
           }
            
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;
