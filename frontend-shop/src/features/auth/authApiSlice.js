import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import serverUri from "../../utilities/serverUri";


export const userSignup = createAsyncThunk("auth/userSignup", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/user-signup`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/user-login`, data, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getLoggedinUser = createAsyncThunk("auth/getLoggedinUser", async () => {
    try{

        const response = await axios.get(`${serverUri}/users/me`, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const userLogout = createAsyncThunk("auth/userLogout", async () => {
    try{

        const response = await axios.post(`${serverUri}/users/user-logout`, "", {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

