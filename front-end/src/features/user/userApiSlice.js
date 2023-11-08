import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import serverUri from "../../utilities/serverUri";


export const createUserPermission = createAsyncThunk("user/createUserPermission", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/permissions/create`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getAllPermission = createAsyncThunk("user/getAllPermission", async () => {
    try{

        const response = await axios.get(`${serverUri}/users/permissions/all`, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getSinglePermission = createAsyncThunk("user/getSinglePermission", async (id) => {
    try{

        const response = await axios.get(`${serverUri}/users/permissions/${id}`, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updatePermission = createAsyncThunk("user/updatePermission", async (data, id) => {
    try{

        const response = await axios.put(`${serverUri}/users/permissions/update/${id}`, data, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const deletePermission = createAsyncThunk("user/updatePermission", async (data, id) => {
    try{

        const response = await axios.put(`${serverUri}/users/permissions/delete/${id}`, data, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

