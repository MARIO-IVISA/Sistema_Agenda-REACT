import axios from "axios";
import * as config from '../config/api-config'


export const postLogin = (data) => {
    return axios.post(
        config.getApiUrl()+'/login',
    data).then(
        response => {
            return response.data;
        }
    )
}

export const register = (data) => {
    return axios.post(
        config.getApiUrl()+'/register',
    data).then(
        response => {
            return response.data;
        }
    )
}

