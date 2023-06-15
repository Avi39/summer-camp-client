/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import logo from '../../assets/martial-arts-children-1066x550.webp'
// import FaGoogle from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { FaBeer, FaGoogle, FaEye } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    title: 'Login Successful !',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const saveUser = {name: user.displayName , email: user.email}
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(() =>{
                        navigate(from, { replace: true });
                        Swal.fire({
                            title: 'Login Successful !',
                            showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                          })    
                })   
                
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 ml-20">
                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login Please</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>email is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type={passwordShown ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                <FaEye className='absolute ml-72 mt-14' onClick={togglePasswordVisiblity}></FaEye>
                                {errors.password?.type === 'required' && <span className='text-red-600'>password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <br />
                        <button className='btn flex items-center justify-center gap-2 rounded bg-orange-500 ' onClick={handleGoogleSignIn}>
                            <FaGoogle></FaGoogle>
                            <span>Login with google</span> </button>
                        <p className='mt-4'>New to CAmP WitH MARTIAL? <Link className='font-bold underline text-red-500 ml-1' to="/signup">SignUp Please</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;