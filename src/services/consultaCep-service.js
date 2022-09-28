import axios from "axios"
import * as viaCep from '../config/viaCep'
    export const postLogin = (data) => {
        return axios.get(
            viaCep.viaCep()+`${data}/json/`).then(
            response => {  
                return response.data;
            }
        )
    }
