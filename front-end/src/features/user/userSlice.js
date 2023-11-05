import { createSlice } from "@reduxjs/toolkit";
import { getLoggedinUser, userLogin, userLogout, userSignup } from "./authApiSlice";


const authSlice = createSlice({
    name: "user",
    initialState: {
        permission: null,
        role: null,
        user: null,
        error: null,
        message: null,
        isLoading: null
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

    }
});


// selectors
export const getLoggedinUserData = (state) => state.auth;
// actions
export const { setMessageEmpty } = authSlice.actions;

export default authSlice.reducer;
