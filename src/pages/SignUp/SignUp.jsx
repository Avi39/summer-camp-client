/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../../assets/228.jpg'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors }, getValues } = useForm();
    const navigate = useNavigate();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    
    const onSubmit = data => {
        // console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                const saveUser = {name: data.name, email: data.email}
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'user has been created successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/login');
                    }
                })  
                
            })
            
        })
        .catch(error => console.log(error));

    }
    // console.log(watch("example"))
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 ml-20">
                    <img className='w-full mr-40' src={pic} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">SignUp Please</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" name='name' placeholder="Your name" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, minLength:6, pattern:/^(?=.*[!@#$%^&*])(?=.*[A-Z])/ })} type="password" name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type ==='required' && <span className='text-red-600'>password is required</span>}
                                {errors.password?.type ==='minLength' && <span className='text-red-600'>password must be 6 characters</span>}
                                {errors.password?.type ==='pattern' && <span className='text-red-600'>password must have one capital letter & special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("confirmPassword", { required: true,validate: (value) => {
              const { password } = getValues();
              return password === value || "Passwords should match!";
            } })} type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" />
                                {errors.confirmPassword && <span className='text-red-600'>confirm password is empty or does not match to password</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photo")} type="text" name='photo' placeholder="photo URL" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <br />
                        <p>Already have an account? <Link className='font-bold underline text-red-500 ml-1' to="/login">Login Please</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;