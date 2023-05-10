import React from "react";
import {FaSearch , FaShoppingBag} from 'react-icons/fa'
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-10  lg:container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <a>Home</a>
            </li>           
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <Link><button className="block md:hidden btn bg-white text-red-500 border border-red-400 normal-case hover:border-0 hover:bg-red-500 hover:text-white">Appointment</button></Link>
          </ul>
        </div>
        <Link to='/'>
            <img className="hidden md:block md:h-12 lg:h-20 w-20" src={logo}></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <button className="text-xl"><FaShoppingBag></FaShoppingBag></button>
        <button className="text-xl"><FaSearch></FaSearch></button>
        <a className="hidden md:block btn hover:border-0 bg-white hover:bg-red-500 hover:text-white border border-red-400 text-xl px-4 pt-2 rounded normal-case text-red-500 font-semibold">Appointment</a>
        <Link to='/'>
            <img className="h-10 md:hidden" src={logo}></img>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
