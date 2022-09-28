import * as cad from '../config/api-cad'
import axios from "axios";
import * as helper from '../helpers/auth-helper'

export const cadastro = (data) => {
    return axios.post(
        cad.getApiCadastro()+'/Contatos',
    data).then(
        response => {
            return response.data;
        }
    )
}

export const getContatos = () => {
    return axios.get(
        cad.getApiCadastro()+'/Contatos').then(
        response => {
            return response.data;
        }
    )
}

export const getContatoById = (idContato) => {
    return axios.get(
        cad.getApiCadastro()+'/Contatos/'+ idContato).then(
        response => {
            return response.data;
        }
    )
}

export const deletContato = (idContato) => {
    return axios.delete(
        cad.getApiCadastro()+'/Contatos/'+ idContato).then(
        response => {
            return response.data;
        }
    )
}

export const putContato = (data) => {
    return axios.put(
        cad.getApiCadastro()+'/Contatos/', data).then(
        response => {
            return response.data;
        }
    )
}

axios.interceptors.request.use(
    config => {
        if(config.url.includes('/api/Contatos')){

            var accessToken= helper.GetAccessToken();
            config.headers['Authosization'] = `Bearer ${accessToken}`;
        }
            return config
    },
    error => {
        Promise.reject(error);
    }
)