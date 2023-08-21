import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        name: "Sam",
        email: "sam26@gmail.com",
    },

    currentToken: null,
};

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,

    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser.name = action.payload.name;
            state.currentUser.email = action.payload.email;
        },

        setCurrentToken: (state, action) => {
            //state.currentToken = action.payload;
        },
    },
});

export default currentUserSlice.reducer;
export const { setCurrentToken, setCurrentUser } = currentUserSlice.actions;
export const currentUser = (state) => state.currentUser.currentUser;
export const currentToken = (state) => state.currentUser.currentToken;
