import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUserSlice";
import surveyReducer from "../features/surveySlice"


export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        survey: surveyReducer
    },
});
