import React, {useState, useEffect}  from "react";
import { useForm, Controller } from "react-hook-form";
import textValidation from "../../validations/text-validation";
import emailValidation from "../../validations/email-validation";
import * as contatosService from '../../services/contatos-services'
import InputMask from 'react-input-mask'

export default function EditarContatosForm(){

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const{
        control,
        handleSubmit,
        formState:{
            errors
        },
        reset
    } = useForm();

    const obterContato = (idContato) =>{
        contatosService.getContatoById(idContato)
        .then(
                result =>{
                    reset({
                        idContato: result.idContato,
                        nome: result.nome,
                        email: result.email,
                        telefone: result.telefone
                    }
                        )
                }
            )
            .catch(
                e =>{
                    console.log(e)
                }
            )
    }

    const onSubmit = (data) =>{
        setMensagemSucesso('');
        setMensagemErro('');

        contatosService.putContato(data)
        .then(
                setMensagemSucesso(`Usuario atualizado com sucesso!`)
        )
        .catch(
            e=> {
                console.log(e.response)
                setMensagemErro('Não foi possível realizar a edição do contato.')
            }
        )
    }

    useEffect(
        () => {
                const url = window.location.href;
                const idContato = url.substring(url.lastIndexOf('?id=') +4);

                obterContato(idContato);
        },[]
    )

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
             {
                mensagemSucesso && <div className="alert alert-success">
                        <strong>Sucesso!</strong> {mensagemSucesso}
                </div>
            }
             {
                mensagemErro && <div className="alert alert-danger">
                        <strong>Erro!</strong> {mensagemErro}
                </div>
            }
           
            <div className="row mt-4">

            <Controller
                        control={control}
                        name="idContato"
                        defaultValue=''
                      
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='hidden'
                                id="idContato"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />   
                            )
                        }
                    />

                <div className="col-md-4">
                    <label>Nome do contato</label>
                    <Controller
                        control={control}
                        name="nome"
                        defaultValue=''
                        rules={{
                            validate : textValidation
                        }}
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='text'
                                id="nome" 
                                className='form-control'
                                placeholder="Ex: Mário Duarte"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />   
                            )
                        }
                    />
                      {errors.nome && <div className='text-danger'>
                        {errors.nome.message}
                        </div>    
                    }
                </div>
                <div className="col-md-4">
                <label>Email do contato</label>

                    <Controller
                        control={control}
                        name='email'
                        defaultValue=''
                        rules={{
                            validate: emailValidation
                        }
                        }
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='email' 
                                placeholder="Ex: marioduarte@gmail.com"
                                className='form-control'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />   
                            )
                        }
                    />

                    {errors.email && <div className='text-danger'>
                        {errors.email.message}
                        </div>    
                    }
                </div>

                <div className="col-md-2">
                    <label>Telefone</label>
                    <Controller
                        control={control}
                        name="telefone"
                        defaultValue=''
                        rules={{
                            validate : textValidation
                        }}
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                 <InputMask
                                    id="telefone"
                                    mask="(99) 99999-9999"
                                    className="form-control"
                                    placeholder="(99) 99999-9999"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                 />
                            )
                        }
                    />
                      {errors.telefone && <div className='text-danger'>
                        {errors.telefone.message}
                        </div>    
                    }
                </div>
            </div>

            <div className='mb-3 mt-2'>
                <div className='col-md-12'>
                    <input type='submit' value='Salvar Alterações' className='btn btn-primary'/>
                </div>
            </div>
        </form>
    )
}