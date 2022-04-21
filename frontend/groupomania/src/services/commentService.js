import axios from "axios"
import authHeader from "./axios-service";

const API_URL = "http://localhost:3000/api/comment/";

export default {
    getAllComment(){
        return axios.get(API_URL, { headers: authHeader()})
    },
    createComment(id, data) {
        return axios.post(API_URL + id, data, { headers: authHeader()})
    },

    modifyComment(id, data) {
        return axios.put(API_URL + id, data, { headers: authHeader()})
    },

    deleteComment(id) {
        return axios.delete(API_URL + id, { headers: authHeader()})
    },
}