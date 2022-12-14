import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar'
import Footer from '../Components/Pages/Shared/Footer/Footer'
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import UseUser from '../hooks/UseUser';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isUser] = UseUser(user?.email)

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
                        
                        {/* <li><Link to="/dashboard/allusers">All USers</Link></li> */}
                        {
                            isAdmin && <>
                                <li className='text-white bg-primary rounded mt-5' ><Link to="/dashboard/allusers">All Users</Link></li>
                            </>
                        }
                        {
                            isUser &&
                            <>
                            <li className='text-white bg-primary rounded  mt-5'><Link to="/dashboard/addproducts">Add A Product</Link></li>
                            <li className='text-white bg-primary rounded  mt-5'><Link to="/dashboard/myproducts">My Product</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default DashboardLayout;