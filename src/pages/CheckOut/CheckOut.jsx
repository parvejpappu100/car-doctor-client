import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const {_id , title , price , img} = service;

  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const bookingInformation = {
      customerName: name,
      email,
      phone,
      date,
      img,
      message,
      service_id: _id,
      price: price,
      service_title: title
    }
    console.log(bookingInformation);
    form.reset();

    fetch("http://localhost:5000/bookings" , {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookingInformation)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    })
  }
  
  return (
    <div className="lg:container mx-auto my-10 ">
      <form onSubmit={handleBookService} className="bg-[#F3F3F3] p-5 md:p-10 max-w-5xl mx-auto rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="form-control">
            <input type="text" required name="name" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <input type="date" required name="date"  className="input input-bordered"/>
          </div>
          <div className="form-control">
            <input type="text" required name="phone" placeholder="Your Phone" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <input type="email"required  name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered"/>
          </div>
        </div>
        <textarea className="bg-white w-full mt-5 p-5 rounded-xl" placeholder="Your Message(optional)" name="message" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Confirm Order"  className='w-full btn border-0 normal-case bg-[#FF3811] mt-5 hover:bg-[#FF3811] text-xl'/>
      </form>
    </div>
  );
};

export default CheckOut;
