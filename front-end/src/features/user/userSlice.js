import { createSlice } from "@reduxjs/toolkit";
import { createUserPermission, deletePermission, getAllPermission, updatePermission } from "./userApiSlice";


const userSlice = createSlice({
    name: "user",
    initialState: {
        permissions: null,
        roles: null,
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
            state.permissions = action.payload.permissions;
        }).addCase(getAllPermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(updatePermission.pending, (state) => {
            state.isLoading = true;
        }).addCase(updatePermission.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
        }).addCase(updatePermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(deletePermission.pending, (state) => {
            state.isLoading = true;
        }).addCase(deletePermission.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
        }).addCase(deletePermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


// selectors
export const getAllPermissionData = (state) => state.user;
// actions
export const { setUserMessageEmpty } = userSlice.actions;

export default userSlice.reducer;
