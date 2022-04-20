import Vuex from "vuex";
import router from "../router/index";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000",
})

let connected = false;
let users = localStorage.getItem("users");

if (!users) {
    users = {
        userId: -1,
        token: "",
    }
} else {
    connected = true;
}


const store = new Vuex.Store({
    state: {
        connected: connected,
        status: "",
        users: {
            userId: users.userId,
            nom: users.nom,
            prenom: users.prenom,
            pseudo: users.pseudo,
            email: users.email,
            bio: users.bio,
            isadmin: users.isadmin,
            timestamp: users.timestamp,
            password: users.password,
        },
    },
    mutations: {
        setStatus: function (state, status) {
          state.status = status;
        },
        userLogin: async function (state, users) {
            state.users = {};
      
            baseURL.defaults.headers.common["Authorization"] = users.token;
            localStorage.setItem("users", JSON.stringify(users)); 
      
            state.users.userId = users.userId;
            state.users.pseudo = users.pseudo;
            state.users.token = users.token;
            state.users.isadmin = users.isadmin;
        },
        logout: function (state) {
            state.users = {};
            state.users = {
                userId: -1,
                token: "",
            };   
            localStorage.clear();
            this.$router.push("/login");
        },
        userUpdate: async function (state, users) {
            localStorage.removeItem("users");
            state.users.token = users.token;
            state.users.pseudo = users.pseudo;
            state.users.bio = users.bio;
            state.users.isadmin = users.isadmin;
            localStorage.setItem("users", JSON.stringify(users));
        }
    },
 
});

export default store;