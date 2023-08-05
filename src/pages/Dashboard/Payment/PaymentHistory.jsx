/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../provider/AuthProvider';

const PaymentHistory = () => {
    const [history,setHistory] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/paymentsHistory/${user.email}`)
        .then(res => res.json())
        .then(data => setHistory(data))
    },[])
    return (
        <div>
            <h2 className='font-bold text-4xl text-rose-600 mx-28 mb-14'>
                Payment History</h2>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Class Name</th>
        <th>Transaction Id</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
   {
    history.map((col,index)=> 
    <tr key={col._id}>
      <td>{index+1}</td>
      <td>{col.class_details.marshal_class_name}</td>
      <td>{col.transactionId}</td>
      <td>{col.price}</td>
    </tr>    
  )
   }
   </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;