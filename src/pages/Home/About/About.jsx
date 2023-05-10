import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row py-20  gap-10">
        <div className="md:w-1/2 relative mb-32">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-3/4 border-8 border-white rounded-lg shadow-2xl absolute right-0 top-1/2" />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold text-orange-600">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field.</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
          </p>
          <button className="btn normal-case bg-orange-600 border-0 text-xl hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-500">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
