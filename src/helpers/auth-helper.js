export const singIn = (data) =>{
    localStorage.setItem(
        'USER-AUTH',
        JSON.stringify(data)
    )
}

export const GetNomeUsuario = () => {
    return JSON.parse(localStorage.getItem('USER-AUTH')).nome;
}

export const GetEmailUsuario = () => {
    return JSON.parse(localStorage.getItem('USER-AUTH')).email;
}


export const GetAccessToken = () => {
    return JSON.parse(localStorage.getItem('USER-AUTH')).accessToken;
}

export const signOut = () => {
    return localStorage.removeItem('USER-AUTH');
}

export const isLoggedIn = () => {
    return localStorage.getItem('USER-AUTH') != null;
}

