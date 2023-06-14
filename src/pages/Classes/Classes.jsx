/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ClassActivities from '../home/TopClasses/ClassActivities';
import ClassesDetails from './ClassesDetails';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                const approveClass = data.filter(item => item.status === 'active');
                setAllClasses(approveClass);
            })
    },[])
    return (
        <div>
            <p className='text-5xl font-bold text-center text-red-600 bg-black p-4 mt-8 mb-4'>All Approved Classes</p>
            {
                allClasses.map(item =><ClassesDetails 
                key={item._id}
                item = {item}
                >

                </ClassesDetails>)
            }
        </div>
    );
};

export default Classes;