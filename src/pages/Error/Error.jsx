/* eslint-disable no-unused-vars */
import React from 'react';
import error from '../../assets/404-error.avif'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <img className='mx-auto mt-8' src={error} alt="" />
            <Link to='/'>
            <button className="btn btn-active btn-secondary ml-96 mb-12">Back to Home Page</button>
            </Link>
        </div>
    );
};

export default Error;