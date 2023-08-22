import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        name: "",
        email: "",
        currentToken: localStorage.getItem("TOKEN") || "",
    },
};

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
});

export default currentUserSlice.reducer;
export const { setCurrentUserAndToken, removeCurrentUserAndToken } = currentUserSlice.actions;
export const currentUser = (state) => state.currentUser.currentUser;
