/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBandcamp,FaWallet,FaCalendarAlt, FaHome,FaAtlassian } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-600 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/mycart"><FaBandcamp></FaBandcamp>My Selected Class</NavLink></li> 
                        <div className="divider"></div> 
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>  
                        <li><NavLink to='/classes'><FaAtlassian></FaAtlassian> Classes</NavLink></li>     
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;