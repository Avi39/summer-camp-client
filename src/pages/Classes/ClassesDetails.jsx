/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassesDetails = ({ item }) => {
  const { class_image, marshal_class_name, instructor_name, available_seats, price,_id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {class_id:_id,marshal_class_name,class_image,instructor_name,available_seats,price,user_email:user?.email}
      fetch('https://assignment-tweleve-server.vercel.app/carts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'The class has been selected on cart successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else{
      Swal.fire({
        title: 'Please login to select a class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state: {from: location}});
        }
      })
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={class_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"><span className='text-red-500'>Class Name:</span> {marshal_class_name} </h2>
        <h2 className="card-title"><span className='text-red-500'>Instructor Name:</span>{instructor_name}</h2>
        <h2 className="card-title"><span className='text-red-500'>Available Seat:</span>{available_seats}</h2>
        <h2 className="card-title"><span className='text-red-500'>Price: </span>{price}</h2>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassesDetails;