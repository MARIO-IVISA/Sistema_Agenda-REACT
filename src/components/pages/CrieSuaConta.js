import React from "react";
import RegisterForm from "../forms/RegisterForm";

export default function CrieSuaConta() {

    return (
        <div className="container mt-3">
            <div className='row'>
                <div className='col-md-8 offset-md-1'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Crie sua Conta</h5>
                            <p className='card-text'> Preencha os campos para criar sua conta </p>
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}