/* eslint-disable no-unused-vars */
import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { data } from 'autoprefixer';
import useAuth from '../../../hooks/useAuth';
import Lottie from "lottie-react";
import animation from '../../../assets/23187-kick.json'

const MyCart = () => {
    const [cart,refetch] = useCart();
    const {loading} = useAuth();
    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }
    // 
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://assignment-tweleve-server.vercel.app/carts/${item._id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div className='mb-12'>
             <div className='w-96 mx-auto'>
                <Lottie animationData={animation} loop={true}></Lottie>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className='text-base text-black bg-slate-400'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>PAY</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row,index) =><tr key={row._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.marshal_class_name}
                                </td>
                                <td>{row.instructor_name}</td>
                                <td className='text-center'>{row.available_seats}</td>
                                <td className='text-center'>${row.price}</td>
                                <td>
                                    <button className="btn btn-ghost bg-yellow-500 ">pay</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(row)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                                )
                        }
                        
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyCart;