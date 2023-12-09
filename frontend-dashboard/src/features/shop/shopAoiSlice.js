import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import serverUri from "../../utilities/serverUri";


export const createSellerOrAdminBrand = createAsyncThunk("user/createSellerOrAdminBrand", async (data) => {
    try{

        const response = await axios.post(`${serverUri}/users/brands/create`, data, {
            withCredentials: true
        });
        return response.data;
        
    }catch(err){
        throw new Error(err.response.data.message);
    }
});




