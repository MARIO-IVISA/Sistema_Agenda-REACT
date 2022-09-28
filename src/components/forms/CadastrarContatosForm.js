import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import textValidation from "../../validations/text-validation";
import emailValidation from "../../validations/email-validation";
import * as contatosService from '../../services/contatos-services'
import InputMask from 'react-input-mask'

export default function CadastrarProfessoresForm(){

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

    const onSubmit = (data) =>{
        setMensagemErro('');
        setMensagemSucesso('');

        contatosService.cadastro(data)
        .then(
            result =>{
                console.log(result)
                 setMensagemSucesso(`Contato ${result.nome}, cadastrado com sucesso!`);
                 reset({
                    nome:'', email:'', telefone:''
                 })   
            }
        )
        .catch(
            e=>{
                console.log(e.response);
                setMensagemErro('Não foi possível realizar o cadastro do contato.')
            }
        )
    }

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
                    <input type='submit' value='Realizar Cadastro' className='btn btn-success'/>
                </div>
            </div>
        </form>
    )
}