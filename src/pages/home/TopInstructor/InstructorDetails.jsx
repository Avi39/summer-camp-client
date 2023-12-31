/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const InstructorDetails = ({item}) => {
    const {instructor_image} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 pb-10">
                    <img src={instructor_image} alt="Shoes" className="rounded-xl" />
                </figure>
                
            </div>
        </div>
    );
};

export default InstructorDetails;