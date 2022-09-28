import React from "react";
import EditarContatosForm from "../forms/EditarContatosForm";

export default function EditarProfessores(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Edição de Contatos</h5>
                            <p className="card-text">Preencha os campo para editar um contato.</p>
                            <hr/>
                            <EditarContatosForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}