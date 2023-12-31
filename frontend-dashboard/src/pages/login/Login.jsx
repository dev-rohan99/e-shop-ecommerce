import React, { useEffect, useState } from 'react';
import dashLogo from "../../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import createToast from '../../utilities/createToast';
import { userLogin } from '../../features/auth/authApiSlice';
import { setMessageEmpty } from '../../features/auth/authSlice';


const Login = () => {

    const [input, setInput] = useState({
        phoneOrEmail: "",
        password: "",
        rememberPass: false
    });
    const dispatch = useDispatch();
    const { error, message, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
    }

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        if(!input.phoneOrEmail || !input.password){
            createToast("All fields are required!", "warn");
        }else{
            if(input.rememberPass){
                dispatch(userLogin({phoneOrEmail: input.phoneOrEmail, password: input.password}));
                setInput({
                    phoneOrEmail: "",
                    password: "",
                    rememberPass: false
                })
                document.getElementById("signup-form").reset();
            }else{
                dispatch(userLogin({phoneOrEmail: input.phoneOrEmail, password: input.password}));
                setInput({
                    phoneOrEmail: "",
                    password: "",
                    rememberPass: false
                })
                document.getElementById("signup-form").reset();
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
                                    
                                    <form onSubmit={handleLoginFormSubmit}>
                                        <div className="form-group">
                                            <input name="phoneOrEmail" value={input.phoneOrEmail} onChange={handleInputChange} className="form-control" type="email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input name="password" value={input.password} onChange={handleInputChange} className="form-control" type="password" placeholder="Password"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button className="btn btn-danger btn-block" type="submit">Login</button>
                                        </div>
                                    </form>
                                    
                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">or</span>
                                    </div>
                                    
                                    <div className="social-login">
                                        <span>Login with</span>
                                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a><a href="#" className="google"><i className="fa fa-google"></i></a>
                                    </div>
                                    
                                    <div className="text-center dont-have">Don't have an account? <Link to="/Signup">Signup</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;
