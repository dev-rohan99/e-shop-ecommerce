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

export const updatePermission = createAsyncThunk("user/updatePermission", async ({id, name}) => {
    try{
        
        const response = await axios.put(`${serverUri}/users/permissions/update/${id}`, {name}, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updatePermissionStatus = createAsyncThunk("user/updatePermissionStatus", async ({id, status}) => {
    try{
        
        const response = await axios.put(`${serverUri}/users/permissions/status-update/${id}`, {status}, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const deletePermission = createAsyncThunk("user/deletePermission", async (id, Swal) => {
    try{

        const response = await axios.delete(`${serverUri}/users/permissions/delete/${id}`, {
            withCredentials: true
        });
        if(response.data.permission){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

// roles

export const createUserRole = createAsyncThunk("user/createUserRole", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/roles/create`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getAllRole = createAsyncThunk("user/getAllRole", async () => {
    try{

        const response = await axios.get(`${serverUri}/users/roles/all`, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getSingleRole = createAsyncThunk("user/getSingleRole", async (id) => {
    try{

        const response = await axios.get(`${serverUri}/users/roles/${id}`, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateRoleStatus = createAsyncThunk("user/updateRoleStatus", async ({id, status}) => {
    try{
        
        const response = await axios.put(`${serverUri}/users/roles/status-update/${id}`, {status}, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateRole = createAsyncThunk("user/updateRole", async ({id, name}) => {
    try{
        
        const response = await axios.put(`${serverUri}/users/roles/update/${id}`, {name}, {
            withCredentials: true
        });
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const deleteRole = createAsyncThunk("user/deleteRole", async (id, Swal) => {
    try{

        const response = await axios.delete(`${serverUri}/users/roles/delete/${id}`, {
            withCredentials: true
        });
        if(response.data.permission){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
        return response.data;

    }catch(err){
        throw new Error(err.response.data.message);
    }
});


