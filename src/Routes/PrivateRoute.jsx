/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    Swal.fire({
        title: 'Login!',
        text: 'You have to login first',
        icon: 'error',
        confirmButtonText: 'ok'
      })
   return <Navigate state={{from:location}} to="/login" replace> </Navigate>

    
};

export default PrivateRoute;