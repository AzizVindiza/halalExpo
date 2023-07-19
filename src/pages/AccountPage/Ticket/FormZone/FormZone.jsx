import React, {useContext, useState} from 'react';
import "./formZone.sass"
import BtnProfile from "../../../../components/BtnProfile/BtnProfile";
import Btn from "../../../../components/Btn/Btn";
import {CustomContext} from "../../../../Context";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import FormCheckZone from "./FormCheckZone/FormCheckZone";

const FormZone = ({setState}) => {
    const {setChooseZone,other,setOther} = useContext(CustomContext)
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
                        <FormCheckZone id={"check1"} name={"zone"} title={"Информационные технологии и программное обеспечение."}/>
                        <FormCheckZone id={"check2"} name={"zone"} title={"Машиностроение и автоматизация производства."}/>
                        <FormCheckZone id={"check3"} name={"zone"} title={"Медицинская и фармацевтическая промышленность."}/>
                        <FormCheckZone id={"check4"} name={"zone"} title={"Транспорт и логистика."}/>
                        <FormCheckZone id={"check5"} name={"zone"} title={"Пищевая и сельскохозяйственная промышленность."}/>
                        <FormCheckZone id={"check6"} name={"zone"} title={"Энергетика и альтернативные источники энергии."}/>
                        <FormCheckZone id={"check7"} name={"zone"} title={"Финансовые и банковские продукты и услуги"}/>
                    </div>
                    <div className="formZone__block">
                        <FormCheckZone id={"check8"} name={"zone"} title={"Строительство и недвижимость"}/>
                        <FormCheckZone id={"check9"} name={"zone"} title={"Образовательные продукты и услуги "}/>
                        <FormCheckZone id={"check10"} name={"zone"} title={"Техника и спецтехника"}/>
                        <FormCheckZone id={"check11"} name={"zone"} title={"Классическое и современное искусство"}/>
                        <FormCheckZone id={"check12"} name={"zone"} title={"Национальные товары, рукоделие, сувенирная продукция"}/>
                        <FormCheckZone id={"check13"} name={"zone"} title={"Экотовары"}/>
                        <FormCheckZone id={"check14"} name={"zone"} title={"Инвестиционные проекты"}/>
                        <label htmlFor={"#check"} className={'formZone__click'} onClick={() => setOther(!other)} >
                            <FormCheckZone id={"check15"} name={"zone"} title={"Другое"}/>
                        </label>
                    </div>
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