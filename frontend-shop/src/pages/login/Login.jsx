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


            <section className="signup pt-105 pb-120 gray-bg">
                <div className="container">
                    
                </div>
            </section>

        </>
    )
}

export default Login;
