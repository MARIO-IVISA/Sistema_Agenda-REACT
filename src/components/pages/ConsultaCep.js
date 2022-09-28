import React from "react";
import ConsultaCepForm from "../forms/ConsultaCepForm";

export default function ConsultaCep(){
    return(
       <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Consulta de CEP</h5>
                            <p className="card-text">Preencha o cep para pesquisar o endedereço.</p>
                            <hr/>
                            <ConsultaCepForm/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}