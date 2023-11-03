import { createSlice } from "@reduxjs/toolkit";
import { userSignup } from "./authApiSlice";


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
        setMessageEmpty: () => {
            state.isLoading = null
            state.isSuccess = null;
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(userSignup.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(userSignup.fulfilled, (state, action) => {
            state.isSuccess = true
            state.message = action.message
        });

        builder.addCase(userSignup.rejected, (state, action) => {
            state.error = action.error.message
        });

    }
});


// selectors

// actions
export const { setMessageEmpty } = authSlice.actions;

export default authSlice.reducer;
