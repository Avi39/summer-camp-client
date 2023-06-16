/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBandcamp, FaWallet, FaCalendarAlt, FaHome, FaAtlassian } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                    <ul className="menu p-4 w-80 h-full bg-slate-500 text-base-content">
                        {/* Sidebar content here */}
                        
                    
                        
                        {
                            isAdmin ? <>
                             <li><NavLink to='/'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageClasses"><FaCalendarAlt></FaCalendarAlt>Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers "><FaWallet></FaWallet>Manage users</NavLink></li>
                                
                            </>
                           : isInstructor ? <>
                            <li><NavLink to='/'><FaHome></FaHome>Instructor Home</NavLink></li>
                           <li><NavLink to="/dashboard/addClass"><FaCalendarAlt></FaCalendarAlt>Add a Class</NavLink></li>
                               <li><NavLink to="/dashboard/instructorClasses "><FaWallet></FaWallet>My Classes</NavLink></li>
                           </>
                             : <>
                                <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaBandcamp></FaBandcamp>My Selected Class</NavLink></li>
                                
                            </>
                        }
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