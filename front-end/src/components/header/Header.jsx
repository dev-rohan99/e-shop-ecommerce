import React, { useEffect } from 'react';
import logo from "../../assets/logo.png";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useDropdownModalControl from '../../hooks/useDropdownModalControl';
import { userLogout } from '../../features/auth/authApiSlice';


const Header = () => {

    const dispatch = useDispatch();
    const { error, message, user } = useSelector((state) => state.auth);
    const { isOpen, toggle, dropdownRef } = useDropdownModalControl();

    const handleUserLogout = (e) => {
        e.preventDefault();
        dispatch(userLogout());
    }

    useEffect(() => {
        if(user){
            console.log(user);
        }
    }, [user]);

    return (
        <>
        
            <header id="header-part" className="header-four">
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="header-contact">
                                    <ul className="mb-0">
                                        <li><i className="fa fa-envelope"></i><a href="#">info@yourmail.com</a></li>
                                        <li><i className="fa fa-phone"></i><span>+0123-456-5678</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="header-right d-flex justify-content-end">
                                    <div className="login-register">
                                        <ul className="mb-0">
                                            {user ? (<li ref={dropdownRef} className="nav-item dropdown has-arrow">
                                                <a href="" onClick={toggle} className="dropdown-toggle nav-link pr-0" data-toggle="dropdown">
                                                    <span className="user-img"><img className="rounded-circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="31" alt="Ryan Taylor"/></span>
                                                </a>
                                                {isOpen && <div className="dropdown-menu d-block sjgdhsgdf">
                                                    <div className="user-header">
                                                        <div className="avatar avatar-sm">
                                                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User Image" className="avatar-img rounded-circle"/>
                                                        </div>
                                                        <div className="user-text">
                                                            <h6>Ryan Taylor</h6>
                                                            <p className="text-muted mb-0">{user.role}</p>
                                                        </div>
                                                    </div>
                                                    <a className="dropdown-item text-secondary" href="profile.html">My Profile</a>
                                                    <a className="dropdown-item text-secondary" href="settings.html">Settings</a>
                                                    <a onClick={handleUserLogout} href="" className="dropdown-item text-secondary">Logout</a>
                                                </div>}
                                            </li>) : 
                                            (<><li className="justThis"><Link to={"/login"}>Login</Link></li>
                                            <li className="justThis"><Link to={"/signup"}>Signup</Link></li></>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="">
                                        <img style={{width:"140px"}} src={logo} alt="Logo"/>
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a href="">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="index-2.html">Home 02</a></li>
                                                    <li><a href="index-3.html">Home 03</a></li>
                                                    <li><a href="index-4.html">Home 04</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                    <li><a href="policy.html">Privacy Policy</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="courses.html">Courses</a>
                                                <ul className="sub-menu">
                                                    <li><a href="courses.html">Courses</a></li>
                                                    <li><a href="courses-single.html">Course Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="events.html">Events</a>
                                                <ul className="sub-menu">
                                                    <li><a href="events.html">Events List 1</a></li>
                                                    <li><a href="events-2.html">Events List 2</a></li>
                                                    <li><a href="events-single.html">Event Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="teachers.html">Teachers</a>
                                                <ul className="sub-menu">
                                                    <li><a href="teachers.html">teachers</a></li>
                                                    <li><a href="teachers-2.html">teachers 2</a></li>
                                                    <li><a href="teachers-single.html">teacher Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="blog.html">Blog</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="shop.html">Shop</a>
                                                <ul className="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-single.html">Shop Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="contact.html">Contact</a>
                                                <ul className="sub-menu">
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li><a href="contact-2.html">Contact Us 2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right-icon text-right">
                                        <ul>
                                            <li><a href="javascript:void(0)" id="search"><i className="fa fa-search"></i></a></li>
                                            <li><a href="#"><FaBagShopping style={{fontSize: "25px"}} /><span>0</span></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="search-box">
                <div className="search-form">
                    <div className="closebtn">
                        <span></span>
                        <span></span>
                    </div>
                    <form action="#">
                        <input type="text" placeholder="Search by keyword" />
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        
        </>
    )
}

export default Header;
