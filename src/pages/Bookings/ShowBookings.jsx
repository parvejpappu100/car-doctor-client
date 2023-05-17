import React from 'react';
import { FaTimesCircle } from "react-icons/fa";


const ShowBookings = ({booking , handleDelete }) => {
    const {_id, customerName , email , img, price , service_title , date} = booking;

    return (
        <div className='my-5 flex flex-col md:flex-row gap-3 p-3  md:items-center justify-around'>
            <button onClick={() => handleDelete(_id)} className='text-3xl'><FaTimesCircle></FaTimesCircle></button>
            <div className='flex items-center gap-8'>
                <div>
                    <img className='h-36 w-36 rounded-xl' src={img} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-semibold'>{service_title}</h4>
                    <p><small>Name:{customerName}</small></p>
                    <p><small>Email:{email}</small></p>
                </div>
            </div>
            <div>
                <p className='text-xl font-bold'>${price}</p>
            </div>
            <div>
                <p className='text-xl font-bold'>{date}</p>
            </div>
            <div>
            <button className="btn normal-case bg-orange-600 hover:bg-orange-600 border-0 text-xl">Pending</button>
            </div>
        </div>
    );
};

export default ShowBookings;