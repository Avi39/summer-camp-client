/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-red-500 font-serif">CAmP WitH MARTIAL</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li className='text-purple-800 font-semibold text-xl hover:text-orange-500'><Link to="/">Home</Link></li>
        <li className='text-purple-800 font-semibold text-xl hover:text-orange-500'><Link to="/instructor">Instructors</Link></li>
        <li className='text-purple-800 font-semibold text-xl hover:text-orange-500'><Link to="/classes">Classes</Link></li>
        {
          user && <li className='text-purple-800 font-semibold text-xl hover:text-orange-500'><Link to="/dashboard">Dashboard</Link></li>
        }
        </ul>
        
      </div>
      {
        user && <img className='ml-12 w-12 rounded-full ' src={user.photoURL} alt="" />
      }
      {
        user ? <div className="navbar-end" onClick={handleLogout} >
          <Link to="/" className="btn">LogOut</Link>
        </div> : <div className="navbar-end" >
          <Link to='/login' className="btn">LogIn</Link>
        </div>

      }
    </div>
  );
};

export default Navbar;