/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/martial-arts-children-1066x550.webp'
// import FaGoogle from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 ml-20">
                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login Please</h1>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <br />
                        {/* <button className='btn flex items-center justify-center gap-2 rounded '> 
                        <FaGoogle className=''></FaGoogle>
                       <span>Login with google</span> </button> */}
                        <p className='mt-4'>New to CAmP WitH MARTIAL? <Link className='font-bold underline text-red-500 ml-1'to="/signup">SignUp Please</Link></p> 
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Login;