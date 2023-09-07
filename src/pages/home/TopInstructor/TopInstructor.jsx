/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import InstructorDetails from './InstructorDetails';

const TopInstructor = () => {
    const [Instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('https://assignment-tweleve-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setInstructor(data))
    },[])
    return (
        <div>
            <p className='text-5xl mt-12 mb-12 font-semibold bg-slate-900 h-[100px] text-center text-white p-4 w-11/12 ml-16'>Top Instructor</p>
            <div className='lg:grid grid-cols-3 gap-4 mb-12 w-11/12 ml-20'>
            {
                    Instructor.map(item=><InstructorDetails
                     key={item._id}
                     item={item}
                     >
                    </InstructorDetails>
                        
                    )
                }    
            </div>
        </div>
    );
};

export default TopInstructor;