import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const loadedData = useLoaderData();
  const {user} = useContext(AuthContext)
  const { _id, title, price, img } = loadedData;

  const handleConfirmOrder = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const date = form.date.value
    const email = user?.email
    
    const booking = {
        customerName: name,
        email,
        img,
        date,
        service: title,
        service_id: _id,
        price: price
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
   
  }

 
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h1>Checkout Our Service: {title}</h1>

      <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleConfirmOrder} >
             <div className="flex gap-6">
             <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
             </div>

             <div className="flex gap-6">
             <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Due</span>
                </label>
                <input
                  type="text"
                  name="due"
                  defaultValue={'$ ' + price}
                  placeholder="Deu Amount"
                  className="input input-bordered"
                  required
                />
              </div>
             </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Confirm Order</button>
              </div>
            </form>
          </div>
    </div>
  );
};

export default CheckOut;
