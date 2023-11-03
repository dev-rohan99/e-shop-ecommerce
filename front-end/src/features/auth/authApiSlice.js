import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import serverUri from "../../utilities/serverUri";
import createToast from "../../utilities/createToast";


export const userSignup = createAsyncThunk("auth/userSignup", async (data) => {
    await axios.post(`${serverUri}/users/user-signup`, data).then((res) => {
        createToast("Thank you for joining us!", "success");
    }).catch((err) => {
        createToast(err.response.data.message, "warn");
    });
});

