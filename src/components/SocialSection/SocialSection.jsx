import React from 'react';
import "./SocialSection.sass"
import {useForm} from "react-hook-form";

const SocialSection = () => {
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <section className={'social'}>
           <div className="social__wrapper">
               <h2 className="social__txt">Социальные сети</h2>
               <form className="social__form" onSubmit={handleSubmit(onSubmit)}>
                   <label className="social__inst">
                       Instagram
                       <input type={''}
                              {...register("firstName",{
                                  required: "pole ob",
                                  minLength:{
                                      value: '',
                                      message: ''
                                  }
                              })}
                       />
                   </label>
                   <label className="social__facebbok">
                       Facebook
                       <input type={''}
                              {...register("firstName",{
                                  required: "pole ob",
                                  minLength:{
                                      value: '',
                                      message: ''
                                  }
                              })}
                       />
                   </label>
                   <label className="social__twitter">
                       Twitter
                       <input type={''}
                              {...register("firstName",{
                                  required: "pole ob",
                                  minLength:{
                                      value: '',
                                      message: ''
                                  }
                              })}
                       />
                   </label>

               </form>
           </div>
            
        </section>
    );
};

export default SocialSection;