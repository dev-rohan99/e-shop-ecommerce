import React, { useEffect } from 'react';
import dashLogo from "../../assets/logo.png";
import { MdOutlineNotificationsNone } from "react-icons/md";
import useDropdownModalControl from '../../hooks/useDropdownModalControl';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../features/auth/authApiSlice';
import useAuthHook from '../../hooks/useAuthHook';

const Dashboardheaderssssssssss = () => {

    const { isOpen, toggle, dropdownRef } = useDropdownModalControl();
    const { isOpen: isNotification, toggle: toggleNotification, dropdownRef: dropdownNotificationRef } = useDropdownModalControl();

    const dispatch = useDispatch();
    const { user } = useAuthHook();

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
        
            <div className="headerssssssssss">
                    
                <div className="headerssssssssss-left">
                    <a href="index.html" className="logo">
                        <img src={dashLogo} alt="Logo"/>
                    </a>
                    <a href="index.html" className="logo logo-small">
                        <img src={dashLogo} alt="Logo" width="30" height="30"/>
                    </a>
                </div>
                
                <a href="javascript:void(0);" id="toggle_btn">
                    <i className="fe fe-text-align-left"></i>
                </a>
                
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here"/>
                        <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                
                <a className="mobile_btn" id="mobile_btn">
                    <i className="fa fa-bars"></i>
                </a>
                
                <ul className="nav user-menu">

                    <li ref={dropdownNotificationRef} id='navavav' className="nav-item dropdown noti-dropdown">
                        <a href="" onClick={toggleNotification} className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <MdOutlineNotificationsNone style={{fontSize: "30px"}} /> <span className="badge badge-pill">3</span>
                        </a>
                        {isNotification && <div className="dropdown-menu notifications d-block end-0">
                            <div className="topnav-dropdown-headerssssssssss">
                                <span className="notification-title">Notifications</span>
                                <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                                <span className="avatar avatar-sm">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                                <span className="avatar avatar-sm">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                                <span className="avatar avatar-sm">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                                                </span>
                                                <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Travis Trimble</span> sent a amount of $210 for his <span className="noti-title">appointment</span></p>
                                                <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                                <span className="avatar avatar-sm">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Carl Kelly</span> send a message <span className="noti-title"> to his doctor</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#">View all Notifications</a>
                            </div>
                        </div>}
                    </li>
                    
                    <li ref={dropdownRef} className="nav-item dropdown has-arrow">
                        <a href="" onClick={toggle} className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <span className="user-img"><img className="rounded-circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="31" alt="Ryan Taylor"/></span>
                        </a>
                        {isOpen && <div className="dropdown-menu d-block sjgdhsgdf">
                            <div className="user-headerssssssssss">
                                <div className="avatar avatar-sm">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User Image" className="avatar-img rounded-circle"/>
                                </div>
                                <div className="user-text">
                                    <h6>{user?.name ? user?.name : "Anounmus"}</h6>
                                    <p className="text-muted mb-0">{user?.role ? user?.role : "None"}</p>
                                </div>
                            </div>
                            <a className="dropdown-item" href="profile.html">My Profile</a>
                            <a className="dropdown-item" href="settings.html">Settings</a>
                            <a className="dropdown-item" onClick={handleUserLogout} href="">Logout</a>
                        </div>}
                    </li>
                    
                </ul>
                
            </div>
        
        </>
    )
}

export default Dashboardheaderssssssssss