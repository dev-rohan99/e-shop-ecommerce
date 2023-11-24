import React from 'react';
import { Outlet } from 'react-router-dom';


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
                                    <a href="#account-dashboard" className="nav-link text-left active">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#account-orders" className="nav-link text-left">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#account-downloads" className="nav-link text-left">Downloads</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#account-addresses" className="nav-link text-left">Addresses</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#account-details" className="nav-link text-left">Account details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="wishlist.html" className="nav-link text-left">Wishlist</a>
                                </li>
                                <li className="nav-item">
                                    <a href="login.html" className="nav-link text-left">Logout</a>
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
