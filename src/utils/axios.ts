import axios from "axios";

export const api = axios.create({
    baseURL: "https://niver-api.fluma.dev/api",
});

api.interceptors.request.use((config) => {
    const user = localStorage.getItem("user");
    if (user) {
        const formattedUser = JSON.parse(user);
        config.headers.Authorization = `Bearer ${formattedUser.access_token}`;
    }
    return config;
});
