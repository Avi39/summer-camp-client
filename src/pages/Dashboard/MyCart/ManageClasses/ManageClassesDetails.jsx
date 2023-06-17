/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageClassesDetails = ({ item,refetch }) => {
    const { class_image, marshal_class_name, instructor_name, available_seats, price,_id,instructor_email,status} = item;
    const { user } = useAuth();


    const handleMakeActive = item =>{
        fetch(`https://assignment-tweleve-server.vercel.app/users/adminApprove/${item._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `class is approved`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeDenied = item =>{
        fetch(`https://assignment-tweleve-server.vercel.app/users/adminDenied/${item._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `class is denied`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="card w-fit bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={class_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  text-center">
        <h2 className="card-title"><span className='text-red-500'>Class Name:</span> {marshal_class_name} </h2>
        <h2 className="card-title"><span className='text-red-500'>Instructor Name:</span>{instructor_name}</h2>
        <h2 className="card-title"><span className='text-red-500'>Available Seat:</span>{available_seats}</h2>
        <h2 className="card-title"><span className='text-red-500'>Price: </span>{price}</h2>
        <h2 className="card-title"><span className='text-red-500'>Instructor_email: </span>{instructor_email}</h2>
        <h2 className="card-title"><span className='text-red-500'>Status: </span>{status}</h2>
        <div className="card-actions">
            {
                status === 'active'?<><button onClick={()=>handleMakeDenied(item)} className="btn btn-disabled">denied</button>  <button onClick={()=>handleMakeActive(item)}  className="btn  btn-disabled">approved</button></>: status === 'denied'?<><button onClick={()=>handleMakeDenied(item)} className="btn btn-disabled">denied</button>  <button onClick={()=>handleMakeActive(item)} className="btn  btn-disabled">approved</button></>:
                <><button onClick={()=>handleMakeDenied(item)} className="btn btn-primary">denied</button> <button onClick={()=>handleMakeActive(item)}className="btn btn-warning">approved</button></> 
            }
          
          <button className="btn btn-success">feedback</button>
        </div>
      </div>
    </div>
    );
};

export default ManageClassesDetails;