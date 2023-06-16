/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ManageClassesDetails from './ManageClassesDetails';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
    // const [allClasses, setAllClasses] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/allClasses')
    //         .then(res => res.json())
    //         .then(data =>setAllClasses(data))
    // },[])
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/allClasses')
        return res.json();
    })
    return (
        <div>
            <p className='text-2xl font-bold text-center
              p-4 mt-8 mb-4'>All Classes</p>
             <div className='lg:grid grid-cols-2 gap-20'>
            {
                classes.map(item =><ManageClassesDetails
                key={item._id}
                item = {item}
                refetch={refetch}
                >
                </ManageClassesDetails>)
            }
        </div>
        </div>
       
    );
};

export default ManageClasses;