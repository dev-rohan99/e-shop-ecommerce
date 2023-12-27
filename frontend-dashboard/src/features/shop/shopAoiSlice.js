import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import serverUri from "../../utilities/serverUri";

/**
 * brands functionality
 * multivendor system
 */

export const createSellerOrAdminBrand = createAsyncThunk("shop/createSellerOrAdminBrand", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/brands/create`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getSellerOrAdminBrands = createAsyncThunk("shop/getSellerOrAdminBrand", async () => {
    try{

        const response = await axios.get(`${serverUri}/users/brands/all`, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateSellerOrAdminBrand = createAsyncThunk("shop/updateSellerOrAdminBrand", async (id, data) => {
    try{

        const response = await axios.patch(`${serverUri}/users/brands/update/${id}`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateSellerOrAdminBrandStatus = createAsyncThunk("shop/updateSellerOrAdminBrandStatus", async ({id, status}) => {
    try{

        const response = await axios.put(`${serverUri}/users/brands/status-update/${id}`, {status}, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const deleteSellerOrAdminBrand = createAsyncThunk("shop/deleteSellerOrAdminBrands", async (id, Swal) => {
    try{

        const response = await axios.delete(`${serverUri}/users/brands/delete/${id}`, {
            withCredentials: true
        });

        if(response.data.brands){
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


/**
 * tags functionality
 * multivendor system
 */


export const createShopTag = createAsyncThunk("shop/createShopTag", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/tags/create`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

