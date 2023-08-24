import axios from "axios";
import { router } from "../routes/Route";
import { Navigate } from "react-router-dom";
//import {currentUser} from "../redux/features/currentUserSlice"

export const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_LARA_API_KEY}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("TOKEN");
            window.location.reload();
            return error;
        }

        throw error;
    }
);
