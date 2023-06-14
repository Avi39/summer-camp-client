/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ClassesDetails = ({ item }) => {
    const { class_image, marshal_class_name, instructor_name, available_seats, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={class_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class Name: <span className=''>{marshal_class_name}</span> </h2>
          <h2 className="card-title">Instructor Name: {instructor_name}</h2>
          <h2 className="card-title">Available Seat: {available_seats}</h2>
          <h2 className="card-title">Price: {price}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ClassesDetails;