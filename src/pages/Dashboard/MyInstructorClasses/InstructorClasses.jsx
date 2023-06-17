/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const InstructorClasses = () => {
    const { user } = useAuth();
    const [InstructorClasses, setInstructorClasses] = useState([]);

    const url = `https://assignment-tweleve-server.vercel.app/addClass?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setInstructorClasses(data))
    }, [url])

    return (
        <div>
            <h3 className='text-center mb-4 font-bold text-lg'>My Classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-sm text-black bg-slate-200'>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>enrolled Students</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            InstructorClasses.map((user,index) =><tr key={user._d}>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.marshal_class_name}
                            </td>
                            <td>{user.instructor_name}</td>
                            <td className='text-center'>{user.available_seats}</td>
                            <td>{user.price}</td>
                            <td>{user.status}</td>
                            <td className='text-center'>{user.student_number}</td>
                            <td><button className="btn btn-sm text-xs  btn-warning">see feedback</button></td>
                            <td>
                                <button className="btn btn-xs btn-success">update</button>
                            </td>
                        </tr>
                        )
                        }
                           
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;