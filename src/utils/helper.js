import axios from "axios";

export const API = path => axios.create({
    baseURL: path,
    timeout: 5000
});
