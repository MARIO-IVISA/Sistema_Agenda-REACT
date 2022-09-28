import React, { useState} from 'react'
import { useForm, Controller } from 'react-hook-form'
import emailValidation from '../../validations/email-validation';
import passwordValidation from '../../validations/password.validation';
import * as services from '../../services/account-services';
 import * as helper from '../../helpers/auth-helper';

export default function LoginForm(){

    
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const{
        control,
        handleSubmit,
        formState:{
            errors
        },
     
    } = useForm();

    const onSubmit = (data) => {
       services.postLogin(data)
       .then(
            result => {
                helper.singIn(result)
                window.location.href='/consultar-contatos'
            }
       )
       .catch(
            e => {
                console.log(e.response);
                switch(e.response.status){
                    case 401:
                        setMensagemErro(e.response.data.message);
                        break;
                    default:
                        setMensagemErro('Não foi possível realizar a operação.');
                        break;
                 }
            }
       )
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                mensagemErro && <div className="alert alert-danger">
                        <strong>Erro!</strong> {mensagemErro}
                </div>
            }

            <div className='mb-3'>
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
            <div className='mb-3'>
                <label>Senha de acesso:</label>

                <Controller
                    control={control}
                    name='senha'
                    defaultValue=''
                    // rules={{
                    //     validate: passwordValidation
                    // }
                    // }
                    render={
                        ({field: {onChange, onBlur, value}}) => (
                            
                            <input
                            type='password' 
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
            <div className='mb-3'>
                <div className='d-grid'>
                    <input type='submit' value='Acessar Agenda' className='btn btn-dark'/>
                </div>
            </div>
        </form>
    )
}