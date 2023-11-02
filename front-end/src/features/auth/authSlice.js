import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        isLoading: null,
        isSuccess: null,
        isErrors: null,
        message: ""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        
    }
});


// selectors

// actions


export default authSlice.reducer;
