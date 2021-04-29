import axios from "axios";

export const API = path => axios.create({
    baseURL: path,
    timeout: 5000
});

export const openErrorAlert = (it, message) => {
    it.alertOpen = true
    it.type = "error"
    it.message = message
}

export const openSuccessAlert = (it, message) => {
    it.alertOpen = true
    it.type = "success"
    it.message = message
}