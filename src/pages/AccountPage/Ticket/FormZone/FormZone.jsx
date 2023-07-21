import React, {useContext, useState} from 'react';
import "./formZone.sass"
import BtnProfile from "../../../../components/BtnProfile/BtnProfile";
import Btn from "../../../../components/Btn/Btn";
import {CustomContext} from "../../../../Context";

import FormCheckZone from "./FormCheckZone/FormCheckZone";
import {objectIndustry} from "./ObjectIndustry/ObjectIndustry";
import {queryAllByAltText} from "@testing-library/react";


const FormZone = () => {



    const {setChooseZone,other,setOther,chooseZone,chooseIndustry,setChooseIndustry,setState} = useContext(CustomContext)


    const clickOpenNextPage = () => { //Function let to go next page
        if (chooseZone.length === 0 || chooseIndustry.length === 0)
            return (
                 setState("default")

            )

        else {
            setState("zone")
        }
    }



    const zona = ['Trade', 'Invest', 'Fashion', 'Food']


    return (

        <div className={'formZone'}>

                <h2 className="formZone__h2">Пожалуйста выберите зону </h2>
                <div className="formZone__first">
                    {
                        zona.map((item) => {
                            return (
                                <div key={item} className="formZone__zona">
                                    <input  value={item} onChange={(e) => setChooseZone(e.target.value)}
                                           type={"radio"} name={'range'} className="formZone__circle"/>
                                    <h2 className="formZone__h3">{item}</h2>
                                </div>
                            )
                        })
                    }

                </div>
                <h2 className="formZone__h2 .h2">Пожалуйста выберите отрасль</h2>
                <div className="formZone__second">
                    {
                        objectIndustry.map((item) => (
                            <FormCheckZone key={item} item={item}/>
                        ))
                    }
                    <div style={{width: "80px"}} onClick={() => setOther(!other) } className={'formZone__single'}>
                        <input className="formZone__input" type="radio"/>
                        <label  className="formZone__label formZone__label_second">
                            <h2 className="formZone__h3 formZone__h3_second">Другое</h2>
                        </label>

                    </div>

                </div>

                {
                    other ?
                        <div className={'formZone__industry'}>
                            <h2 className="formZone__h2">Впишите деятельность, которую будете представлять</h2>
                            <label className="formZone__border">
                                <input
                                    name={"radio"}
                                    onChange={(event) => setChooseIndustry(event.target.value)}
                                    type="text" className="formZone__text"/>
                            </label>
                        </div> : ""

                }

                <div className="formZone__last">
                    <div></div>

                    <div onClick={clickOpenNextPage}>
                        <Btn type={"submit"} text={'Далее'}/>
                    </div>

                </div>
        </div>


    );
};

export default FormZone;