import axios from "axios";

const http = axios.create({
    baseURL: "https://barwyshop.somee.com",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;