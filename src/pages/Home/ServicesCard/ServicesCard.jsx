import React from "react";
import {FaArrowRight , FaArrowLeft} from 'react-icons/fa'

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card  bg-base-100 shadow">
      <figure className="px-5 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-[344px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex items-center justify-between text-orange-600">
            <p className="font-bold">Price: ${price}</p>
            <div className="card-actions">
                <button className="btn btn-ghost hover:bg-orange-500 hover:text-white rounded-full">
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
