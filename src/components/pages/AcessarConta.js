import React from "react";
import LoginForm from "../forms/LoginForm";

export default function AcessarConta(){

    return(
        <div className="container mt-3">
            <div className='row'>
               <div className='col-md-4 offset-md-4'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='text-center'>
                            <img src='https://www.cotiinformatica.com.br/imagens/logo-coti-informatica.png' className='img-fluid'/>
                            <h5 className='card-title'>Acessar Conta</h5>
                            <p className='card-text'> Informa suas credenciais de acesso para entrar na agenda </p>
                        </div>
                    </div>
                    <LoginForm/>
                </div>
               </div>
            </div>
        </div>
    )
}