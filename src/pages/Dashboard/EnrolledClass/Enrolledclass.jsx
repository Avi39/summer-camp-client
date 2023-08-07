/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Enrolledclass = () => {
    const [enrolled,setEnrolled] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(` https://assignment-tweleve-server.vercel.app/enrolled/${user.email}`)
        .then(res => res.json())
        .then(data => setEnrolled(data))
    },[])
    return (
        <div>
            <h2 className='text-4xl font-bold text-fuchsia-950 mx-28 mb-8'>My Enrolled Classes</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Class</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Instructor name</th>
      </tr>
    </thead>
    <tbody>
      {
        enrolled.map((col,index)=>
        <tr key={col._id}>
        <td>
          {index+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={col.class_details.class_image} />
              </div>
            </div>
          </div>
        </td>
        <td>
         {col.class_details.marshal_class_name}
        </td>
        <td>{col.class_details.price}</td>
        <td>{col.class_details.instructor_name}</td>
      </tr>
        )
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Enrolledclass;