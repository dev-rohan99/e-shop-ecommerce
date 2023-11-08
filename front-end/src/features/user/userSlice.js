import { createSlice } from "@reduxjs/toolkit";
import { createUserPermission, getAllPermission, updatePermission } from "./userApiSlice";


const userSlice = createSlice({
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
        setUserMessageEmpty: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(createUserPermission.pending, (state) => {
            state.isLoading = true;
        }).addCase(createUserPermission.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
        }).addCase(createUserPermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(getAllPermission.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllPermission.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.permission = action.payload.permissions;
        }).addCase(getAllPermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(updatePermission.pending, (state) => {
            state.isLoading = true;
        }).addCase(updatePermission.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.permission = action.payload.permissions;
        }).addCase(updatePermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


// selectors

// actions
export const { setUserMessageEmpty } = userSlice.actions;

export default userSlice.reducer;
