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
 * tag functionality
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

export const getShopTag = createAsyncThunk("shop/getShopTag", async () => {
    try{

        const response = await axios.get(`${serverUri}/users/tags/all`, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateShopTag = createAsyncThunk("shop/updateShopTag", async (id, data) => {
    try{

        const response = await axios.patch(`${serverUri}/users/tags/update/${id}`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateShopTagStatus = createAsyncThunk("shop/updateShopTagStatus", async ({id, status}) => {
    try{

        const response = await axios.put(`${serverUri}/users/tags/status-update/${id}`, {status}, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const deleteShopTag = createAsyncThunk("shop/deleteShopTag", async (id, Swal) => {
    try{

        const response = await axios.delete(`${serverUri}/users/tags/delete/${id}`, {
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
 * category functionality
 * multivendor system
 */


export const createShopCategory = createAsyncThunk("shop/createShopCategory", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/categories/create`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const getShopCategories = createAsyncThunk("shop/getShopCategories", async () => {
    try{

        const response = await axios.get(`${serverUri}/users/categories/all`, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateShopCategoriy = createAsyncThunk("shop/updateShopCategoriy", async (id, data) => {
    try{

        const response = await axios.patch(`${serverUri}/users/categories/update/${id}`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const updateShopCategoryStatus = createAsyncThunk("shop/updateShopCategoryStatus", async ({id, status}) => {
    try{

        const response = await axios.put(`${serverUri}/users/categories/status-update/${id}`, {status}, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});

export const deleteShopCategory = createAsyncThunk("shop/deleteShopCategory", async (id, Swal) => {
    try{

        const response = await axios.delete(`${serverUri}/users/categories/delete/${id}`, {
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


