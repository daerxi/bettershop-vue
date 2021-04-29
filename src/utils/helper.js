import axios from "axios";

export const API = path => axios.create({
    baseURL: path,
    timeout: 5000
});

export const openAlert = (it, type, message) => {
    it.alertOpen = true
    it.type = type
    it.message = message
}