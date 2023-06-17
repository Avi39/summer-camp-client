/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-tweleve-server.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user =>{
        fetch(`https://assignment-tweleve-server.vercel.app/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://assignment-tweleve-server.vercel.app/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    const handleDelete = (user) =>{

    }
    return (
        <div>
            <h3 className='text-center mb-4 font-bold text-lg'>Total user: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-base text-black bg-slate-400'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make instructor</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) =><tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='text-center'>{user.role === 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                             <td className='text-center'>{user.role === 'instructor' ? 'instructor' : <button onClick={()=>handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                            <td>
                                <button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
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

export default ManageUsers;