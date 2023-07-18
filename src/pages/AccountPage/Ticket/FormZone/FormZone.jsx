import React, {useContext, useState} from 'react';
import "./formZone.sass"
import BtnProfile from "../../../../components/BtnProfile/BtnProfile";
import Btn from "../../../../components/Btn/Btn";
import {CustomContext} from "../../../../Context";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import FormCheckZone from "./FormCheckZone/FormCheckZone";

const FormZone = ({setState}) => {
    const {setChooseZone,other,setOther,} = useContext(CustomContext)
    const {
        register, formState: {
            errors
        },
        handleSubmit
    } = useForm()




    const zona = ['Trade', 'Invest', 'Fashion', 'Food', 'National']

    const onSubmit = (data) => {
        console.log(data)
    }
    return (

        <div className={'formZone'}>
            <form onSubmit={handleSubmit(onSubmit)} className="formZone__form">
                <h2 className="formZone__h2">Пожалуйста выберите зону </h2>
                <div className="formZone__first">
                    {
                        zona.map((item) => {
                            return (
                                <div key={item} className="formZone__zona">
                                    <input {...register('zone', {
                                        value: true,
                                        message: ""
                                    })} value={item} onChange={(e) => setChooseZone(e.target.value)}
                                           type={"radio"} name={'range'} className="formZone__circle"/>
                                    <h2 className="formZone__h3">{item}</h2>
                                </div>
                            )
                        })
                    }

                </div>
                <h2 className="formZone__h2">Пожалуйста выберите отрасль</h2>
                <div className="formZone__second">
                    <div className="formZone__block">
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                    </div>
                    <div className="formZone__block">
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                    </div>
                    {
                        other ?
                            <>
                                <h2 className="formZone__h2">Впишите деятельность, которую будете представлять</h2>
                                <label className="formZone__border">
                                    <input {...register("yourGoods", {
                                        required: {
                                            message: "Выберите деятельность",
                                            value: true
                                        }
                                    })} type="text" className="formZone__text"/>
                                    <span>{errors.yourGoods && errors.yourGoods.message}</span>
                                </label>
                            </> : ""

                    }
                </div>

                <div className="formZone__last">
                    <div></div>

                    <div onClick={() => setState('zone')}>
                        <Btn type={"submit"} text={'Далее'}/>
                    </div>


                </div>
            </form>
        </div>


    );
};

export default FormZone;