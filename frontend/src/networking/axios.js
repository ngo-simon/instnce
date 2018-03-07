import * as axios from "axios";

const config = {
    baseURL: "http://localhost:8080"
};

const instance = axios.create(config);

export default instance;