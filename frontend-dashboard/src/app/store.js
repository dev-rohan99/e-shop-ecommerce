import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import shopReducer from "../features/shop/shopSlice";

// create store
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        shop: shopReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
    devTools: true
});

export default store;
