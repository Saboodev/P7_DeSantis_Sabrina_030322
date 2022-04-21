import axios from "axios"
import authHeader from "./axios-service";

const API_URL = "http://localhost:3000/api/post/";

export default {
    getAllPost(){
        return axios.get(API_URL, { headers: authHeader()})
    },
    createPost(data) {
        return axios.post(API_URL, data, { headers: authHeader()})
    },

    modifyPost(id, data) {
        return axios.put(API_URL + id, data, { headers: authHeader()})
    },

    deletePost(id) {
        return axios.delete(API_URL + id, { headers: authHeader()})
    },
}