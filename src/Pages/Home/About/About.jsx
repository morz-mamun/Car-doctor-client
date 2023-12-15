import React from "react";
import ab1 from '../../../assets/images/about_us/person.jpg'
import ab2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div>
       
      <div className="hero min-h-screen bg-base-200">
     
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
          <h1 className="text-center text-5xl">about us</h1>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 relative ">
            <div>
                <img src={ab1} alt="" />
            </div>
            <div className="absolute top-1/2 left-10">
            <img src={ab2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
