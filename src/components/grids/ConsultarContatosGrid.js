import React, {useState, useEffect} from "react";
import * as contatosService from '../../services/contatos-services';
//import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

export default function ConsultarContatosGrid(){

    const [contatos, setContatos] = useState([]);

    const consultarContatos = () =>{
            contatosService.getContatos()
            .then(
                result => {
                    $(document).ready(function(){
                        $("#tabela").DataTable({
                            language:{
                                url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Portuguese-Brasil.json'
                            }
                        })
                    });
                setContatos(result);
                }
            )
            .catch(
                e => {
                    console.log(e.response)
                }
            )
    }

    const excluirContato = (idContato) => {
        if(window.confirm('Deseja realmente excluir o contato?'))
        {
            contatosService.deletContato(idContato)
            .then(
                result => {
                    alert('Contato excluído com sucesso!');
                    window.location.reload();
                }
            )
            .catch(
                e => {
                    console.log(e)
                }
            )
        }
      
    }

    useEffect(
        () => {
            consultarContatos();
        },[]
    )

    return(
        <div>
            <table id="tabela" className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th>Nome do Contato</th>
                        <th>Email do Contato</th>
                        <th>Telefone do Contato</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contatos.map(
                            function(contato,i){
                                return(
                                    <tr key={i}>
                                          <td>{contato.nome}</td>
                                          <td>{contato.email}</td>
                                          <td>{contato.telefone}</td>
                                          <td>
                                              <a href="#" className="btn btn-primary btn-sm"
                                              onClick={
                                                () => window.location.href = `/editar-contatos?id=${contato.id}`
                                              }
                                              >
                                                  Alterar
                                              </a>
                                              &nbsp;
                                              <a className="btn btn-danger btn-sm"
                                              onClick={
                                                () => excluirContato(contato.id)
                                              }>
                                                  Excluir
                                              </a>
                                          </td>
                                      </tr> 
                                )
                            }
                        )
                    }

                      
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='4'>
                            Quantidade de registros: 0
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}