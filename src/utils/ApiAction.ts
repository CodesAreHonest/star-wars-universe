import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

const ApiAction = {
    get(url, params = {}, headers = {}) {
        const apiUrl = `${BASE_URL}${url}`;
        return axios.get(apiUrl, { params, headers });
    }
};

export default ApiAction;