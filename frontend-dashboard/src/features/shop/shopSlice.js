import { createSlice } from "@reduxjs/toolkit";
import { createSellerOrAdminBrand } from "./shopAoiSlice";


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

    }
});


// selectors

// actions
export const { setShopMessageEmpty } = shopSlice.actions;

export default shopSlice.reducer;
