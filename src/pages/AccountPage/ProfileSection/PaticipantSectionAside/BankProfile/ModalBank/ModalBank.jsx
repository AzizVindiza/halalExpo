import React from 'react';
import Btn from "../../../../../../components/Btn/Btn";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {fillRegister} from "../../../../../../redux/reducers/userSlice";
import {toast} from "react-toastify";

const ModalBank = ({setModalBank}) => {
    const {user} = useSelector((store) => store.user)
    const {register,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(fillRegister({...user,...data}))
        // upDateUser(data)
        setModalBank(false)
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
                <div onClick={() => setModalBank(false)} className="modaldata__close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16699 1.1665L12.8337 12.8332M1.16699 12.8332L12.8337 1.1665" stroke="black"
                              strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className="modaldata__title">Реквизиты</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="modaldata__form">
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Наименование банка</span>
                        <input defaultValue={user.name_bank} {...register("name_bank")} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Расчетный счет </span>
                        <input defaultValue={user.p_c} {...register("p_c")} type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">БИК</span>
                        <input defaultValue={user.bik} {...register("bik")} type="text" className="modaldata__input"/>
                    </label>
                    <Btn  text={'Подтвердить'}/>
                </form>
            </div>
        </div>
    );
};

export default ModalBank;