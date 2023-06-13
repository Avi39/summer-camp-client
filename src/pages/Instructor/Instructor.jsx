/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AllInstructor from './AllInstructor';

const Instructor = () => {
    const [AllInstructors, setAllInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => setAllInstructor(data))
    },[])
    return (
        <div>
            <p className='text-5xl font-bold text-center text-red-600 bg-black p-4 mt-8 mb-4'>All Instructors</p>
             <div className='lg:grid grid-cols-3 gap-4 mb-12'>
            {
                    AllInstructors.map(item=><AllInstructor
                     key={item._id}
                     item={item}
                     >
                    </AllInstructor>
                    )
                }    
            </div>
        </div>
    );
};

export default Instructor;