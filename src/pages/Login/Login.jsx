import React from 'react';
import img from '../../assets/images/login/login.svg'
import {FaFacebookF , FaGoogle , FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='lg:container mx-auto flex flex-col md:flex-row items-center justify-center gap-5 my-20'>
            <div className='md:w-2/4 w-full flex items-center justify-center'>
                <img src={img} alt='' />
            </div>
            <div className='w-full md:w-2/4 lg:w-2/5 py-10 border md:mr-2'>
                <h3 className='text-center text-3xl font-semibold'>Login</h3>
                <form className='w-4/5 lg:w-2/3 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Email</span>
                        </label>
                        <input type="text" placeholder="Your email"  className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered " />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input type="submit" value="Login"  className='w-full  bg-[#FF3811] text-white py-3 my-5 rounded-md font-semibold'/>
                </form>
                <div className='w-2/3 mx-auto'>
                    <h6 className='text-center my-3 font-semibold'>Or sing with</h6>
                    <div className='flex gap-10 items-center justify-center my-5'>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaLinkedinIn></FaLinkedinIn></button>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGoogle></FaGoogle></button>
                    </div>
                    <p className='text-center'>Have an account ? <Link className='text-red-500 font-semibold'>Sing up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;