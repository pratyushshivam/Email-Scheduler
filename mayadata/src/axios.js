import axios from 'axios';
const instance = axios.create({
    baseURL: "https://backendmaya.herokuapp.com"
})
export default instance;