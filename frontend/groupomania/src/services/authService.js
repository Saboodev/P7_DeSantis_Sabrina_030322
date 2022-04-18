import bdd from "@/services/bddService";

export default {
    signUp(users) {
        return bdd.post("register", users)
    },

    login(users) {
        return bdd.post("login", users)
    },

    logout(users) {
        localStorage.removeItem("users")
    }
}