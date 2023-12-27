import { createSlice } from "@reduxjs/toolkit";
import { createSellerOrAdminBrand, deleteSellerOrAdminBrand, getSellerOrAdminBrands, updateSellerOrAdminBrand, updateSellerOrAdminBrandStatus } from "./shopAoiSlice";


const shopSlice = createSlice({
    name: "user",
    initialState: {
        products: null,
        brands: null,
        categories: null,
        tags: null,
        orders: null,
        user: null,
        error: null,
        message: null,
        isLoading: null
    },
    reducers: {
        setShopMessageEmpty: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(createSellerOrAdminBrand.pending, (state) => {
            state.isLoading = true;
        }).addCase(createSellerOrAdminBrand.fulfilled, (state, action) => {
            state.brands = state.brands ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.brands.push(action.payload.brand);
        }).addCase(createSellerOrAdminBrand.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(getSellerOrAdminBrands.pending, (state) => {
            state.isLoading = true;
        }).addCase(getSellerOrAdminBrands.fulfilled, (state, action) => {
            state.brands = state.brands ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.brands = action.payload.brands;
        }).addCase(getSellerOrAdminBrands.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(deleteSellerOrAdminBrand.pending, (state) => {
            state.isLoading = true;
        }).addCase(deleteSellerOrAdminBrand.fulfilled, (state, action) => {
            state.brands = state.brands ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.brands = state.brands.filter((data) => data._id !== action.payload.brand._id);
        }).addCase(deleteSellerOrAdminBrand.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(updateSellerOrAdminBrandStatus.pending, (state) => {
            state.isLoading = true;
        }).addCase(updateSellerOrAdminBrandStatus.fulfilled, (state, action) => {
            state.brands = state.brands ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.brands[
                state.brands.findIndex(
                    (data) => data._id == action.payload.brand._id
                )
            ] = action.payload.brand;
        }).addCase(updateSellerOrAdminBrandStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(updateSellerOrAdminBrand.pending, (state) => {
            state.isLoading = true;
        }).addCase(updateSellerOrAdminBrand.fulfilled, (state, action) => {
            state.brands = state.brands ?? [];
            state.isLoading = false;
            state.message = action.payload.message;
            state.brands[
                state.brands.findIndex(
                    (data) => data._id == action.payload.brand._id
                )
            ] = action.payload.brand;
        }).addCase(updateSellerOrAdminBrand.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


// selectors

// actions
export const { setShopMessageEmpty } = shopSlice.actions;

export default shopSlice.reducer;
