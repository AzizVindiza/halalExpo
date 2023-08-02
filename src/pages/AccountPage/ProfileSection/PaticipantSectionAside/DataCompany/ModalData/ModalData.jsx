import React from 'react';
import Btn from "../../../../../../components/Btn/Btn";
import "./modaldata.sass"
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useUpDateUserMutation} from "../../../../../../redux/ApiSlice";
import {fillRegister} from "../../../../../../redux/reducers/userSlice";
import {toast} from "react-toastify";
const ModalData = ({setOpenModal}) => {
    const dispatch = useDispatch()
    const {user} = useSelector((store) => store.user)
    const {register, handleSubmit} = useForm({mode: "onBlur"})

    const [upDateUser] = useUpDateUserMutation()
    const onSubmit = (data) => {
        dispatch(fillRegister({...user,...data}))
        // upDateUser(data)
        setOpenModal(false)
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
                <div onClick={() => setOpenModal(false)} className="modaldata__close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16699 1.1665L12.8337 12.8332M1.16699 12.8332L12.8337 1.1665" stroke="black"
                              strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className="modaldata__title">Данные о компании</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="modaldata__form">
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Название компании</span>
                        <input {...register("company_one")} name="textfield" defaultValue={user.company_one} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Страна </span>
                        <input {...register("country")} defaultValue={user.country} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Город</span>
                        <input {...register("city")} defaultValue={user.city} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Юридический адрес</span>
                        <input {...register("address_one")} defaultValue={user.address_one} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Фактический адрес</span>
                        <input {...register("address_two")} defaultValue={user.address_two} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Название компании</span>
                        <input {...register("company_two")} defaultValue={user.company_two} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Юридическое название компании</span>
                        <input {...register("company_two")} defaultValue={user.company_two} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Количество сотрудников</span>
                        <input {...register("personnel")} defaultValue={user.personnel} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Направление</span>
                        <input {...register("direction")} defaultValue={user.direction} type="text"
                               className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Описание</span>
                        <input {...register("description")} defaultValue={user.description} type="text"
                               className="modaldata__input"/>
                    </label>
                    <Btn type={'submit'} text={'Подтвердить'}/>
                </form>
            </div>
        </div>
    );
};

export default ModalData;