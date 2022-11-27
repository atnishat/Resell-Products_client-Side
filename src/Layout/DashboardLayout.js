import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar'
import Footer from '../Components/Pages/Shared/Footer/Footer'

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
        
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='text-white bg-primary rounded'><Link to="/dashboard">My Appointments</Link></li>
                        {/* {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                            </>
                        } */}

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default DashboardLayout;