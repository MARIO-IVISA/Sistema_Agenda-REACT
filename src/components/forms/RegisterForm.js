import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import * as accontServices from '../../services/account-services';
import emailValidation from "../../validations/email-validation";
import passwordValidation from "../../validations/password.validation";
import textValidation from "../../validations/text-validation";
import * as services from '../../services/account-services';

export default function RegisterForm(){

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const {
        control,
        handleSubmit,
        formState:{
            errors
        },
        reset
    } = useForm();

    const onSubmit = (data) => {
        setMensagemSucesso('');
        setMensagemErro('');



        services.register(data)
        .then(
             result => {
                setMensagemSucesso('Usuário cadastrado com sucesso!');
                reset({

                    nome:'',
                    email:'',
                    senha:'',
                    senha:'',

                });
             }
        )
        .catch(
             e => {
                 console.log(e.response);

                 switch(e.response.status){
                    case 400:
                        setMensagemErro(e.response.data.message);
                        break;
                    case 422:
                        setMensagemErro(e.response.data);
                        break;
                    default:
                        setMensagemErro('Não foi possível realizar a operação.');
                        break;
                 }
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

            <div className="row mb-3">
            <div className="col-md-6">
                    <label>Nome do usuário</label>
                    <Controller
                        control={control}
                        name='nome'
                        defaultValue=''
                        rules={{
                            validate: textValidation
                        }
                        }
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='text' 
                                className='form-control'
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

                <div className="col-md-6">
                <label>Email de acesso:</label>

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

                <div className="col-md-6">
                    <label>Senha do usuário</label>
                    <Controller
                        control={control}
                        name='senha'
                        defaultValue=''
                        rules={{
                            validate: passwordValidation
                        }
                        }
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='password' 
                                className='form-control'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />   
                            )
                        }
                    />
                    {errors.senha && <div className='text-danger'>
                        {errors.senha.message}
                        </div>    
                    }
                </div>

                <div className="col-md-6">
                    <label>Confirme a Senha do usuário</label>
                    <Controller
                        control={control}
                        name='senha'
                        defaultValue=''
                        rules={{
                            validate: passwordValidation
                        }
                        }
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='password' 
                                className='form-control'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />   
                            )
                        }
                    />
                    {errors.senha && <div className='text-danger'>
                        {errors.senha.message}
                        </div>    
                    }
                </div>

            </div>

            
            <div className='mb-3'>
                <div className='col-md-12'>
                    <input type='submit' value='Realizar Cadastro' className='btn btn-success'/>
                </div>
            </div>


        </form>
    )

}