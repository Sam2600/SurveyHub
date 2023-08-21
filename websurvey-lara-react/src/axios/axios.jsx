import axios from "axios";

export const axiosClient = axios.create({
     baseURL: `${import.meta.env.VITE_LARA_API_KEY}/api`
});