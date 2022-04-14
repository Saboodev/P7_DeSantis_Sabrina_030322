import axios from "axios";

export default () => {
    return axios.create({
        bdd: `http://localhost:3000/api/auth/`
    })
}