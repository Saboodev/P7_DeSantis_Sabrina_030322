import axios from "axios"
import authHeader from "./axios-service";

const API_URL = "http://localhost:3000/api/user/";

export default {
    signUp(users) {
        return axios.post(API_URL + "register", users)
    },

    login(users) {
        return axios.post(API_URL + "login", users)
    },

    logout(users) {
        localStorage.removeItem("users")
    },
    delete(id){
        return axios.delete(API_URL + id, { headers: authHeader()})
    },
    getAllUsers(){
        return axios.get(API_URL, { headers: authHeader()})
    }
}