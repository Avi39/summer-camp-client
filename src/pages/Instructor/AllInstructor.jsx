/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const AllInstructor = ({ item }) => {
    const { instructor_image, instructor_name, instructor_email
    } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={instructor_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor_name}</h2>
                    <p>email: {instructor_email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInstructor;