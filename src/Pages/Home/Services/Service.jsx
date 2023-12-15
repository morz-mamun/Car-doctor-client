import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {_id, img, price, title } = service
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions">
         <Link to= {`/checkout/${_id}`}>
         <button className="btn btn-primary">Book Now</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
