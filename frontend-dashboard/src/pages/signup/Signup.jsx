import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from 'react-router-dom';
import createToast from '../../utilities/createToast';
import { isPassword } from '../../utilities/validation';
import { userSignup } from '../../features/auth/authApiSlice';
import { setMessageEmpty } from '../../features/auth/authSlice';

const Signup = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        agreement: null
    });
    const dispatch = useDispatch();
    const { error, message } = useSelector((state) => state.auth);

    const handleInputChange = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
    }

    const handleSignupFormSubmit = async (e) => {
        e.preventDefault();
        if(!input.name || !input.email || !input.password || !input.rePassword){
            createToast("All fields are required!", "warn");
        }else if(!input.agreement){
            createToast("Please agree all statements in Terms of service!", "warn");
        }else{

            if(!isPassword(input.password)){
                createToast("Invalid password! please enter valid password and length should be minimum 6 characters.", "warn");
            }

            if(isPassword(input.password)){
                if(input.password !== input.rePassword){
                    createToast("Please correct your password carefully!", "warn");
                }else{
                    if(input.password === input.rePassword){
                        dispatch(userSignup({
                            name : input.name,
                            email : input.email,
                            password : input.password,
                        }));
                        setInput({
                            name: "",
                            email: "",
                            password: "",
                            rePassword: ""
                        })
                        document.getElementById("signup-form").reset();
                    }
                }
            }

        }
    }

    useEffect(() => {
        if(error){
            createToast(error, "warn");
            dispatch(setMessageEmpty());
        }
        if(message){
            createToast(message, "success");
            dispatch(setMessageEmpty());
        }
    }, [error, message]);
    
    return (
        <>

            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <div className="loginbox">
                            <div className="login-left">
                                <h1 className="text-center font-weight-bold font-size-lg text-white">E-shop</h1>
                            </div>
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Signup</h1>
                                    <p className="account-subtitle">Access to our dashboard</p>
                                    
                                    <form onSubmit={handleSignupFormSubmit}>
                                        <div className="form-group">
                                            <input name="name" value={input.name} onChange={handleInputChange} className="form-control" type="text" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input name="email" value={input.email} onChange={handleInputChange} className="form-control" type="text" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input name="password" value={input.password} onChange={handleInputChange} className="form-control" type="text" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <input name="rePassword" value={input.rePassword} onChange={handleInputChange} className="form-control" type="text" placeholder="Confirm Password"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button className="btn btn-danger btn-block" type="submit">Signup</button>
                                        </div>
                                    </form>
                                    
                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">or</span>
                                    </div>
                                    
                                    <div className="social-login">
                                        <span>Signup with</span>
                                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a><a href="#" className="google"><i className="fa fa-google"></i></a>
                                    </div>
                                    
                                    <div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Signup;
