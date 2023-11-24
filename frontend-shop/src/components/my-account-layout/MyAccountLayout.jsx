import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const MyAccountLayout = () => {



    return (
        <>
        
        
            <main className="main">
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title mb-0">My Account</h1>
                    </div>
                </div>


                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb" style={{background:"#0000"}}>
                            <li><a href="demo1.html">Home</a></li>
                            <li>My account</li>
                        </ul>
                    </div>
                </nav>
                

                <div className="page-content pt-2">
                    <div className="container">
                        <div className="row">
                            <ul className="col-md-3 mb-6 list-style-none" role="tablist">
                                <li className="nav-item">
                                    <Link to="/my-account/dashboard" className="nav-link text-left active">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/my-account/orders" className="nav-link text-left">Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/my-account/downloads" className="nav-link text-left">Downloads</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/my-account/addresses" className="nav-link text-left">Addresses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/my-account/account-details" className="nav-link text-left">Account details</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/wishlist" className="nav-link text-left">Wishlist</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-left">Logout</Link>
                                </li>
                            </ul>

                            <div className="col-md-9 mb-6">

                                <Outlet/>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
        
        </>
    )
}

export default MyAccountLayout;
