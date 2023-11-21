import { createSlice } from "@reduxjs/toolkit";
import { createUserPermission, createUserRole, deletePermission, deleteRole, getAllPermission, getAllRole, updatePermission, updatePermissionStatus, updateRole } from "./userApiSlice";


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
            state.permissions = state.permissions ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.permissions.push(action.payload.permission);
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
            state.permissions[
                state.permissions.findIndex(
                    (data) => data._id == action.payload.permission._id
                )
            ] = action.payload.permission;
        }).addCase(updatePermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(updatePermissionStatus.pending, (state) => {
            state.isLoading = true;
        }).addCase(updatePermissionStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.permissions[
                state.permissions.findIndex(
                    (data) => data._id == action.payload.permission._id
                )
            ] = action.payload.permission;
        }).addCase(updatePermissionStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(deletePermission.pending, (state) => {
            state.isLoading = true;
        }).addCase(deletePermission.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.permissions = state.permissions.filter((data) => data._id !== action.payload.permission._id);
        }).addCase(deletePermission.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(createUserRole.pending, (state) => {
            state.isLoading = true;
        }).addCase(createUserRole.fulfilled, (state, action) => {
            state.roles = state.roles ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.roles.push(action.payload.role);
        }).addCase(createUserRole.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(getAllRole.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllRole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.roles = action.payload.roles;
        }).addCase(getAllRole.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(updateRole.pending, (state) => {
            state.isLoading = true;
        }).addCase(updateRole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.roles[
                state.roles.findIndex((data) => data._id == action.payload.role._id)
            ] = action.payload.role
        }).addCase(updateRole.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(deleteRole.pending, (state) => {
            state.isLoading = true;
        }).addCase(deleteRole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
            state.roles = state.roles.filter((data) => data._id !== action.payload.role._id);
        }).addCase(deleteRole.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


// selectors
export const getAllPermissionData = (state) => state.user;
export const getAllRoleData = (state) => state.user;
// actions
export const { setUserMessageEmpty } = userSlice.actions;

export default userSlice.reducer;
