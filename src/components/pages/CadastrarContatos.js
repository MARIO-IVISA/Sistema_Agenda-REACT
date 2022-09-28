import React from "react";
import CadastrarContatosForm from "../forms/CadastrarContatosForm";
export default function CadastrarContatos(){
    return(
       <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cadastro de Contatos</h5>
                            <p className="card-text">Preencha os campo para incluir um contato.</p>
                            <hr/>
                            <CadastrarContatosForm/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}