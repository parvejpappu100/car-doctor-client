import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className="lg:container mx-auto my-10 ">
      <form className="bg-[#F3F3F3] p-5 md:p-10 max-w-5xl mx-auto rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="form-control">
            <input type="text" placeholder="Full Name" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Last Name" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Your Phone" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <input type="email" placeholder="Your Email" className="input input-bordered"/>
          </div>
        </div>
        <textarea className="bg-white w-full mt-5 p-5 rounded-xl" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Confirm Order"  className='w-full btn border-0 normal-case bg-[#FF3811] mt-5 hover:bg-[#FF3811] text-xl'/>
      </form>
    </div>
  );
};

export default CheckOut;
