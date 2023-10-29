import React from 'react';
import logo from "../../assets/logo.png";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {


    return (
        <>
            
            <footer id="footer-part">
                <div className="footer-top pt-40 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-about mt-40">
                                    <div className="logo">
                                        <a href="#"><img src={logo} alt="Logo"/></a>
                                    </div>
                                    <p>Gravida nibh vel velit auctor aliquetn quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                                    <ul className="mt-20">
                                        <li><a href="#"><FaFacebookF style={{fontSize: "25px"}} /></a></li>
                                        <li><a href="#"><FaTwitter style={{fontSize: "25px"}} /></a></li>
                                        <li><a href="#"><FaGooglePlusG style={{fontSize: "25px"}} /></a></li>
                                        <li><a href="#"><FaInstagram style={{fontSize: "25px"}} /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-link mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>Sitemap</h6>
                                    </div>
                                    <ul>
                                        <li><a href="index.html"><i className="fa fa-angle-right"></i>Home</a></li>
                                        <li><a href="about.html"><i className="fa fa-angle-right"></i>About us</a></li>
                                        <li><a href="courses.html"><i className="fa fa-angle-right"></i>Courses</a></li>
                                        <li><a href="blog.html"><i className="fa fa-angle-right"></i>News</a></li>
                                        <li><a href="events.html"><i className="fa fa-angle-right"></i>Event</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Gallery</a></li>
                                        <li><a href="shop.html"><i className="fa fa-angle-right"></i>Shop</a></li>
                                        <li><a href="teachers.html"><i className="fa fa-angle-right"></i>Teachers</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Support</a></li>
                                        <li><a href="contact.html"><i className="fa fa-angle-right"></i>Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-link support mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>Support</h6>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>FAQS</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Privacy</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Policy</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Support</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Documentation</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-address mt-40">
                                    <div className="footer-title pb-25">
                                        <h6>Contact Us</h6>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-home"></i>
                                            </div>
                                            <div className="cont">
                                                <p>143 castle road 517 district, kiyev port south Canada</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="cont">
                                                <p>+3 123 456 789</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                            <div className="cont">
                                                <p>info@yourmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-copyright pt-10 pb-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="copyright text-md-left text-center pt-15">
                                    <p>&copy; Copyrights 2020 Edubin All rights reserved. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright text-md-right text-center pt-15">
                                    <p>Designed by <span>Pixelcurve</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
        </>
    )
}

export default Footer;
