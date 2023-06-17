/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useAuth()

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const class_name = form.class_name.value;
        const class_image = form.class_image.value;
        const instructor_name = user?.displayName;
        const instructor_email = user?.email;
        const seats = form.seats.value;
        const price = form.price.value;
        const instructor_image = form.instructor_image.value;
        const add = {
            marshal_class_name: class_name,
            class_image: class_image,
            instructor_name: instructor_name,
            instructor_email: instructor_email,
            instructor_image: instructor_image,
            available_seats: seats,
            price: price,
            status: 'pending',
            student_number: 20
        }
        console.log(add);

        fetch('http://localhost:5000/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Class has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <p className='text-4xl font-bold mb-8 text-center '>Add a New Class</p>
            <form onSubmit={handleAddClass}>
                <div className='lg:grid grid-cols-3 gap-8'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" text-lg font-semibold">Class Name</span>
                        </label>
                        <input type="text" name='class_name' placeholder="class name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" text-lg font-semibold">Class Image</span>
                        </label>
                        <input type="text" name='class_image' placeholder="give image url" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='instructor_name' placeholder="instructor name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" name='instructor_email' defaultValue={user?.email} placeholder="instructor email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Available seats</span>
                        </label>
                        <input type="text" name='seats' placeholder="available seats" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" text-lg font-semibold">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" text-lg font-semibold">Instructor image</span>
                        </label>
                        <input type="text" name='instructor_image' placeholder="give image url" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <input type="submit" value="Add Class" className='btn btn-primary btn-block ml-2 mt-6' />
            </form>
        </div>
    );
};

export default AddClass;