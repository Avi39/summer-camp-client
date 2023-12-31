/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = []} = useQuery({
        queryKey: ['carts',user?.email],
        // queryFn: async ()=>{
        //     const res = await fetch(`https://assignment-tweleve-server.vercel.app/carts?user_email=${user?.email}`,{headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?user_email=${user?.email}`)
            // console.log('res from axios',res)
            return res.data;
        },
       
      })

      return [cart,refetch]
    
};

export default useCart;