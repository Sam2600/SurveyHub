import axios from "axios";
import { router } from "../routes/Route"

export const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_LARA_API_KEY}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = '123'
    config.headers.Authorization = `Bearer${token}`;
    return config;
})

axiosClient.interceptors.response.use(response => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        router.navigate("/login");
        return error;
    }

    throw error;
})
