import React from "react";
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import {FaArrowRight , FaArrowLeft} from 'react-icons/fa'

const Banner = () => {
  return (
    <div className="carousel h-[344px] md:h-[544px] w-full lg:h-[700px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={img1}
          className="w-full"
        />
        <div className=" absolute left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
         <div className="absolute top-1/4 left-5 md:left-20">
            <h3 className="text-xl md:text-5xl text-white font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
            <p className="text-white hidden md:block my-5">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className="flex gap-2 mt-5">
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case">Discover More</button>
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case ">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide2" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full"
        />
        <div className=" absolute left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
         <div className="absolute top-1/4 left-5 md:left-20">
            <h3 className="text-xl md:text-5xl text-white font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
            <p className="text-white hidden md:block my-5">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className="flex gap-2 mt-5">
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case">Discover More</button>
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case ">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide3" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full"
        />
        <div className=" absolute left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
         <div className="absolute top-1/4 left-5 md:left-20">
            <h3 className="text-xl md:text-5xl text-white font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
            <p className="text-white hidden md:block my-5">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className="flex gap-2 mt-5">
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case">Discover More</button>
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case ">Latest Project</button>
            </div>
         </div>
        </div>
         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide4" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full"
        />
        <div className=" absolute left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
         <div className="absolute top-1/4 left-5 md:left-20">
            <h3 className="text-xl md:text-5xl text-white font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
            <p className="text-white hidden md:block my-5">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className="flex gap-2 mt-5">
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case">Discover More</button>
                <button className=" text-white border border-white rounded-md py-3 px-4 font-semibold hover:border-0 hover:bg-[#FF3811] hover:text-white normal-case ">Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide1" className="btn btn-circle  bg-gray-400 border-0 hover:bg-[#FF3811]">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
