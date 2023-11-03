import { createSlice } from "@reduxjs/toolkit";
import { getLoggedinUser, userLogin, userLogout, userSignup } from "./authApiSlice";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        isLoading: null,
        isSuccess: null,
        error: null,
        message: null
    },
    reducers: {
        setMessageEmpty: (state) => {
            state.isSuccess = null;
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(userSignup.pending, (state) => {
            state.isLoading = true;
        }).addCase(userSignup.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.message = action.payload.message;
        }).addCase(userSignup.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        
        .addCase(userLogin.pending, (state) => {
            state.isLoading = true;
        }).addCase(userLogin.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.user = action.payload.user;
            state.message = action.payload.message;
        }).addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        
        .addCase(getLoggedinUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(getLoggedinUser.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.user = action.payload.user;
        }).addCase(getLoggedinUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        
        .addCase(userLogout.pending, (state) => {
            state.isLoading = true;
        }).addCase(userLogout.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.user = null;
            state.message = action.payload.message;
        }).addCase(userLogout.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


// selectors

// actions
export const { setMessageEmpty } = authSlice.actions;

export default authSlice.reducer;
