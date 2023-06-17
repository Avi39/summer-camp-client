/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ClassActivities from './ClassActivities';

const TopClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://assignment-tweleve-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    },[])
    return (
        <div>
            <p className='text-5xl mt-12 mb-12 font-semibold bg-slate-900 h-[100px] text-center text-white p-4'>Top Classes</p>
            <div className='lg:grid grid-cols-3 gap-4 mb-12'>
            {
                    classes.map(item=><ClassActivities
                     key={item._id}
                     item={item}
                     >
                    </ClassActivities>
                        
                    )
                }     
            </div>
        </div>
    );
};

export default TopClasses;