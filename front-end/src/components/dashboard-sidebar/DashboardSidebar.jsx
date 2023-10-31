import React from 'react';
import { Link } from "react-router-dom";
import { FaSitemap } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdOutlineCategory, MdOutlineDashboard, MdOutlineSettings, MdReportGmailerrorred } from 'react-icons/md';
import { TbNewSection, TbTruckDelivery } from 'react-icons/tb';
import { AiFillShop, AiOutlineTags } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineUsers } from 'react-icons/hi2';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';


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
                                <Link to={"/dashboard/products"}><FaSitemap style={{fontSize: "23px"}} /> <span>Products</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/categories"}><MdOutlineCategory style={{fontSize: "23px"}} /> <span>Categories</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/tags"}><AiOutlineTags style={{fontSize: "23px"}} /> <span>Tags</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/sellers"}><AiFillShop style={{fontSize: "23px"}} /> <span>Sellers</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/users"}><HiOutlineUsers style={{fontSize: "23px"}} /> <span>Users</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/drivers"}><TbTruckDelivery style={{fontSize: "23px"}} /> <span>Drivers</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/invoices"}><LiaFileInvoiceDollarSolid style={{fontSize: "23px"}} /> <span>Invoices</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/profile"}><CgProfile style={{fontSize: "23px"}} /> <span>Profile</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/settings"}><MdOutlineSettings style={{fontSize: "23px"}} /> <span>Settings</span></Link>
                            </li>
                            <li> 
                                <Link to={"/dashboard/transactions"}><TbNewSection style={{fontSize: "23px"}} /> <span>Transactions</span></Link>
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
