import React, {useState} from 'react';
import Btn from "../../../../../../components/Btn/Btn";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fillRegister} from "../../../../../../redux/reducers/userSlice";
import {toast} from "react-toastify";

const ModalDataBoss = ({setModalDataBoss}) => {
    const {user} = useSelector((store) => store.user)
    const {register,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(fillRegister({...user,...data}))
        // upDateUser(data)
        setModalDataBoss(false)
        toast.success('Ваши данные изменены', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })

    }
    return (
        <div className={'modaldata'}>
            <div className="modaldata__wrapper">
                <div onClick={() => setModalDataBoss(false) } className="modaldata__close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16699 1.1665L12.8337 12.8332M1.16699 12.8332L12.8337 1.1665" stroke="black" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className="modaldata__title">Данные о руководителя</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="modaldata__form">
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">ФИО</span>
                        <input {...register("name_manager")} defaultValue={user.name_manager} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Дата рождения</span>
                        <input {...register("date_of_birth")} defaultValue={user.date_of_birth} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">ИНН</span>
                        <input {...register("iin_inn")} defaultValue={user.iin_inn} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Действующий на основании</span>
                        <input {...register("effective")} defaultValue={user.effective} type="text" className="modaldata__input"/>
                    </label>
                    <h2 className="modaldata__title">Контактное лицо</h2>
                    <label htmlFor="lname" className="modaldata__label">
                        <span className="openModalData__span">ФИО</span>
                        <input name={"lname"} id={"lname"} {...register("name_cont_person")} defaultValue={user.name_cont_person} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Номер телефона</span>
                        <input {...register("number_cont_person")} defaultValue={user.number_cont_person} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Электронная почта</span>
                        <input {...register("email")} defaultValue={user.email} type="email" className="modaldata__input"/>
                    </label>
                    <Btn type={'submit'} text={'Подтвердить'}/>
                </form>
            </div>
        </div>
    );
};

export default ModalDataBoss;