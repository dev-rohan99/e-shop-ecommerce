import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import bannerImg from "../../assets/images/page-banner-1.jpg";
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';


const Login = () => {

    const [input, setInput] = useState({
        phoneOrEmail : "",
        password : ""
    });

    const handleInputChange = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
    }

    const handleLoginFormSubmit = async (e) => {

    }
    
    return (
        <>
            
            <Header/>
        
            <section id="page-banner" className="pt-110 pb-110 bg_cover" data-overlay="8" style={{backgroundImage: `url(${bannerImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner-cont">
                                <h2>Login</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="signup pt-105 pb-120 gray-bg">
                <div className="container">
                    <div className="col-md-8 offset-md-2">
                        <div className="signup-content">
                            <form onSubmit={handleLoginFormSubmit} method="POST" id="signup-form" className="signup-form">
                                <h2 className="form-title pb-20">Login your account</h2>
                                <div className="form-group">
                                    <input onChange={handleInputChange} value={input.phoneOrEmail} type="text" className="form-input" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={handleInputChange} value={input.password} type="password" className="form-input" name="password" id="password" placeholder="Password"/>
                                    <span className="zmdi zmdi-eye field-icon toggle-password"></span>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span> Remember password</label>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" id="submit" className="main-btn register-submit" value="Login"/>
                                </div>
                            </form>
                            <p className="loginhere">
                                Have already an account ? <Link to="/signup" className="loginhere-link">Signup here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </>
    )
}

export default Login