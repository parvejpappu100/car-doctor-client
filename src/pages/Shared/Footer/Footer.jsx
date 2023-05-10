import React from "react";
import logo from '../../../assets/logo.svg'
import {FaGoogle , FaFacebook , FaTwitter , FaInstagram , FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
        <footer className="footer p-20 bg-black text-white mt-10">
          <div>
           <img src={logo}></img>
            <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
            </p>
            <div className="flex items-center gap-3 text-xl">
                <Link><FaGoogle></FaGoogle></Link>
                <Link><FaFacebook></FaFacebook></Link>
                <Link><FaTwitter></FaTwitter></Link>
                <Link><FaInstagram></FaInstagram></Link>
                <Link><FaLinkedin></FaLinkedin></Link>
            </div>
          </div>
          <div>
            <span className="footer-title">About</span>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">Why Car Doctor</a>
            <a className="link link-hover">About</a>
          </div>
          <div>
            <span className="footer-title">Support</span>
            <a className="link link-hover">Support Center</a>
            <a className="link link-hover">Feedback</a>
            <a className="link link-hover">Accessibility</a>
          </div>
        </footer>
  );
};

export default Footer;
