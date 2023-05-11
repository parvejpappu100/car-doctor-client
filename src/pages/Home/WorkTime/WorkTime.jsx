import React from 'react';
import { FaCalendarAlt , FaPhoneAlt , FaMapMarkerAlt } from "react-icons/fa";
import {HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

const WorkTime = () => {
    return (
        <div className='bg-black my-32 px-10 py-20 text-white flex flex-col md:flex-row space-y-5 items-center justify-around lg:rounded-xl'>
            <div className='flex items-center gap-4'>
                <div>
                    <FaCalendarAlt className='text-4xl'></FaCalendarAlt>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h4 className='text-xl lg:text-3xl my-2 font-medium'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='relative'>
                    <HiChatBubbleOvalLeftEllipsis className='text-red-500 text-3xl absolute left-3 right-0 bottom-4'></HiChatBubbleOvalLeftEllipsis>
                    <FaPhoneAlt className='text-4xl'></FaPhoneAlt>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h4 className='text-xl lg:text-3xl my-2 font-medium'>+2546 251 2658</h4>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <FaMapMarkerAlt className='text-4xl text-red-500'></FaMapMarkerAlt>
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <h4 className='text-xl lg:text-3xl my-2 font-medium'>Liza Street, New York</h4>
                </div>
            </div>
        </div>
    );
};

export default WorkTime;