import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [acc, setAcc] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${acc ? "acc" : "desc"}&search=${search}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [acc, search]);

  const handleSearch = (e) => {
    e.preventDefault()
    const search = e.target.search.value
    setSearch(search)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl text-center font-bold my-5">Our Services</h1>
      <div
        className="flex justify-center items-center my-5"
      >
        <form onSubmit={handleSearch}>
          <input className="border-2 border-black" type="text" name="search" id="" />
          <input className="btn" type="submit" value="search" />
        </form>
        <button onClick={() => setAcc(!acc)}  className="btn btn-secondary ">
          {acc ? "Price: High To Low" : "Price: Low To High"}
        </button>
      </div>

     

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
