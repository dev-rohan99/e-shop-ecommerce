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


            <section className="signup pt-105 pb-120 gray-bg">
                <div className="container">
                    <div className="col-md-5 mx-auto shadow-lg p-5">
                        <div className="tab-content">
                            <div className="tab-pane active" id="sign-in">
                                <div className="form-group">
                                    <label>Email address *</label>
                                    <input type="text" className="form-control" name="email" id="username" required={true}/>
                                </div>
                                <div className="form-group mb-0">
                                    <label>Password *</label>
                                    <input type="text" className="form-control" name="password" id="password" required={true} />
                                </div>
                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-checkbox" id="remember" name="remember" required={true}/>
                                    <label htmlFor="remember">Remember me</label>
                                    <a href="#">Last your password?</a>
                                </div>
                                <a href="#" className="btn btn-primary">Sign In</a>
                            </div>
                        </div>
                        <p className="text-center">Sign in with social account</p>
                        <div className="social-icons social-icon-border-color d-flex justify-content-center">
                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                            <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                            <a href="#" className="social-icon social-google fab fa-google"></a>
                        </div>
                    </div>
                </div>
            </section>

        
        </>
    )
}

export default Signup;
