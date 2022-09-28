import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import textValidation from "../../validations/text-validation";
import emailValidation from "../../validations/email-validation";
import * as contatosService from '../../services/contatos-services'
import InputMask from 'react-input-mask'
import * as consultaCep from '../../services/consultaCep-service'

export default function ConsultaCepForm(){

    
 // const {register, handleSubmit, setValue, setFocus,control} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }
  const{
    control,
    register,
    handleSubmit,
    formState:{
        errors
    },
    reset
} = useForm();

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    consultaCep.postLogin(cep).then(


        result =>{
            reset({
                logradouro: result.logradouro,
        
            }
                )
        }

                        )}
    
    
    


    //   const obterContato = (idContato) =>{
    //     contatosService.getContatoById(idContato)
    //     .then(
    //             result =>{
    //                 reset({
    //                     idContato: result.idContato,
    //                     nome: result.nome,
    //                     email: result.email,
    //                     telefone: result.telefone
    //                 }
    //                     )
    //             }
    //         )
    //         .catch(
    //             e =>{
    //                 console.log(e)
    //             }
    //         )







      // register({ name: 'address', value: data.logradouro });
    //   setValue('address', ress.logradouro);
    //   setValue('neighborhood', ress.bairro);
    //   setValue('city', ress.localidade);
    //   setValue('uf', ress.uf);
    //   setFocus('addressNumber');
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        CEP:
        <input type="text" {...register("cep")} onBlur={checkCEP} />
      </label>
      
      <div className="col-md-4">
                    <label>CEP</label>
                    <Controller
                        control={control}
                        name="logradouro"
                        defaultValue=''
                      
                        render={
                            ({field: {onChange, onBlur, value}}) => (
                                
                                <input type='text'
                                id="logradouro" 
                                className='form-control'
                                placeholder="Ex: Mário Duarte"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />   
                            )
                        }
                    />
                     
                </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
