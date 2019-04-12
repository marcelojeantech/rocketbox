import axios from "axios";

const api = axios.create({
    baseURL: 'https://weekbackend.herokuapp.com'
});

export default api;