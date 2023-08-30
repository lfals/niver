import axios from "axios";

export const api = axios.create({
    baseURL: "https://dev.niver-api.fluma.dev/api/",
});
