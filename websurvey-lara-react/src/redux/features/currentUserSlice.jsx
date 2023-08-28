import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../axios/axios";

const initialState = {
    currentUser: {
        name: "",
        email: "",
        currentToken: localStorage.getItem("TOKEN") || "",
    },
};

export const fetchCurrentUser = createAsyncThunk("currentUser/fetchCurrentUser", async () => {
    const response = await axiosClient.get("/me");
    return response.data;
});

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,

    reducers: {

        setCurrentUserAndToken: (state, action) => {
            const token = action.payload.token;
            const user = action.payload.user;

            state.currentUser.name = user.name;
            state.currentUser.email = user.email;

            if (token) {
                localStorage.setItem("TOKEN", token);
            } else {
                localStorage.removeItem("TOKEN");
            }

            state.currentUser.currentToken = token;
        },

        removeCurrentUserAndToken: (state, action) => {

            state.currentUser.name = ""
            state.currentUser.email = ""
            state.currentUser.currentToken = null
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.currentUser.name = action.payload?.name;
            state.currentUser.email = action.payload?.email;
        });
    }
});

export default currentUserSlice.reducer;
export const { setCurrentUserAndToken, removeCurrentUserAndToken } = currentUserSlice.actions;
export const currentUser = (state) => state.currentUser.currentUser;
