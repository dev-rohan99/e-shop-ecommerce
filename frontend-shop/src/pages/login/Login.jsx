import React, { useEffect, useState } from 'react';
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
    const { error, message } = useSelector((state) => state.auth);
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


            <section className="signup pt-10 pb-10 mt-10 mb-10 gray-bg">
                <div className="container">
                    <div className="col-md-6 mx-auto shadow-lg p-5">
                        <h1 className="font-size-xxl font-weight-bold mb-5 text-center">Login</h1>
                        <div className="" id="sign-in">
                            <form onSubmit={handleLoginFormSubmit}>
                                <div className="form-group">
                                    <label>Email address or Phone *</label>
                                    <input type="text" className="form-control" onChange={handleInputChange} value={input.phoneOrEmail} name="phoneOrEmail" id="username" required={true}/>
                                </div>
                                <div className="form-group mb-0">
                                    <label>Password *</label>
                                    <input type="password" className="form-control" onChange={handleInputChange} value={input.password} name="password" id="password" required={true} />
                                </div>
                                <div className="form-checkbox mt-3 d-flex align-items-center justify-content-between">
                                    <input onChange={handleInputChange} type="checkbox" className="custom-checkbox" id="remember" name="rememberPass" value={input.rememberPass}/>
                                    <label className="text-default" htmlFor="remember">Remember me</label>
                                    <a href="#">Lost your password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3 mb-4">Login</button>
                            </form>
                        </div>
                        <p className="text-center">Login with social account</p>
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

export default Login;
