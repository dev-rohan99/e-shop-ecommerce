import React from 'react';
import { Link } from "react-router-dom";
import { FaSitemap } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdOutlineCategory, MdOutlineDashboard, MdReportGmailerrorred } from 'react-icons/md';
import { TbNewSection, TbTruckDelivery } from 'react-icons/tb';
import { AiFillShop, AiOutlineTags } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';


const DashboardSidebar = () => {

        
    return (
        <>
        
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title"> 
                                <span>Admin</span>
                            </li>
                            <li className="active"> 
                                <Link to={"/dashboard"}><MdOutlineDashboard style={{fontSize: "23px"}} /> <span>Dashboard</span></Link>
                            </li>
                            <li> 
                                <a href=""><FaSitemap style={{fontSize: "23px"}} /> <span>Products</span> <MdKeyboardArrowDown style={{fontSize: "23px"}} /></a>
                                <ul style={{display: "none"}}>
                                    <li><Link to={"/add-new-product"}>Add new product</Link></li>
                                    <li><Link to={"/all-product"}>All product</Link></li>
                                </ul>
                            </li>
                            <li> 
                                <a href="specialities.html"><MdOutlineCategory style={{fontSize: "23px"}} /> <span>Categories</span>
                                <MdKeyboardArrowDown style={{fontSize: "23px"}} /></a>
                                <ul style={{display: "none"}}>
                                    <li><Link to={"/add-new-product"}>Add new product</Link></li>
                                    <li><Link to={"/all-product"}>All product</Link></li>
                                </ul>
                            </li>
                            <li> 
                                <a href="doctor-list.html"><AiOutlineTags style={{fontSize: "23px"}} /> <span>Tags</span>
                                <MdKeyboardArrowDown style={{fontSize: "23px"}} /></a>
                                <ul style={{display: "none"}}>
                                    <li><Link to={"/add-new-product"}>Add new product</Link></li>
                                    <li><Link to={"/all-product"}>All product</Link></li>
                                </ul>
                            </li>
                            <li> 
                                <a href="patient-list.html"><AiFillShop style={{fontSize: "23px"}} /> <span>Sellers</span>
                                <MdKeyboardArrowDown style={{fontSize: "23px"}} /></a>
                                <ul style={{display: "none"}}>
                                    <li><Link to={"/add-new-product"}>Add new product</Link></li>
                                    <li><Link to={"/all-product"}>All product</Link></li>
                                </ul>
                            </li>
                            <li> 
                                <a href="reviews.html"><TbTruckDelivery style={{fontSize: "23px"}} /> <span>Drivers</span>
                                <MdKeyboardArrowDown style={{fontSize: "23px"}} /></a>
                                <ul style={{display: "none"}}>
                                    <li><Link to={"/add-new-product"}>Add new product</Link></li>
                                    <li><Link to={"/all-product"}>All product</Link></li>
                                </ul>
                            </li>
                            <li> 
                                <a href="profile.html"><CgProfile style={{fontSize: "23px"}} /> <span>Profile</span></a>
                            </li>
                            <li> 
                                <a href="settings.html"><MdReportGmailerrorred style={{fontSize: "23px"}} /> <span>Settings</span></a>
                            </li>
                            <li> 
                                <a href="transactions-list.html"><TbNewSection style={{fontSize: "23px"}} /> <span>Transactions</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><MdReportGmailerrorred style={{fontSize: "23px"}} /> <span> Reports</span> <MdKeyboardArrowDown style={{fontSize: "23px"}} /></a>
                                <ul style={{display: "none"}}>
                                    <li><a href="invoice-report.html">Invoice Reports</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default DashboardSidebar;
