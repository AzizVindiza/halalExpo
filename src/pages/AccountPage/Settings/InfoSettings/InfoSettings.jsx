import React, {useEffect, useState} from 'react';
import "./infoSettings.sass"
import {useNavigate} from "react-router-dom";
import ava from "../img/ava.png"
import {useDispatch, useSelector} from "react-redux";
import {logOut, toggleModal} from "../../../../redux/reducers/userSlice";
import {toast} from "react-toastify";


const InfoSettings = () => {
    // const [open,setOpen] = useState(false)
    const navigate = useNavigate()
    const {user,open} = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const logOutOfAccount = () => {
        toast.success('Вы вышли из аккаунта', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        dispatch(logOut())
        dispatch(toggleModal())
    }


    return (
        <section className={"infoSettings"}>
            <div className="infoSettings__container">
                <div className="infoSettings__wrapper">
                    <div className="infoSettings__box">
                        <svg onClick={()=>navigate(-1)} width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="11" fill="#D9E2FF"/>
                            <path d="M30 12C30.5523 12 31 11.5523 31 11C31 10.4477 30.5523 10 30 10V12ZM10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L16.6569 18.0711C17.0474 18.4616 17.6805 18.4616 18.0711 18.0711C18.4616 17.6805 18.4616 17.0474 18.0711 16.6569L12.4142 11L18.0711 5.34315C18.4616 4.95262 18.4616 4.31946 18.0711 3.92893C17.6805 3.53841 17.0474 3.53841 16.6569 3.92893L10.2929 10.2929ZM30 10L11 10V12L30 12V10Z" fill="#494949"/>
                        </svg>
                        <h2 className="infoSettings__h2">
                            Информация об аккаунте
                        </h2>
                    </div>
                    <div className="infoSettings__row">
                        <div className="infoSettings__img">
                            <img  src={`${process.env.REACT_APP_REST}${user.image_logo}`} className={'infoSettings__img'} alt=""/>
                        </div>
                        <div className="infoSettings__col">
                            <h3 className="infoSettings__h3">
                                {user.full_name}
                            </h3>
                            <h4 className="infoSettings__h4">
                                {user.email}
                            </h4>
                        </div>
                    </div>
                    <div className="infoSettings__column">
                        <span className="infoSettings__span">
                            Дата регистрации
                        </span>
                        <h5 className="infoSettings__h5">
                            {user.date_joined.slice(0,10)}
                        </h5>
                    </div>

                    <button onClick={() => dispatch(toggleModal())} className="infoSettings__btn">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.07422 6.60357C8.41684 2.6247 10.4615 1 14.9378 1H15.0814C20.0219 1 22.0002 2.97838 22.0002 7.9188V15.125C22.0002 20.0654 20.0219 22.0438 15.0814 22.0438H14.9378C10.4947 22.0438 8.45 20.4412 8.08527 16.5286" stroke="#FF2E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.814 11.5117H2.23633" stroke="#FF2E13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.70256 7.80859L1 11.5111L4.70256 15.2137" stroke="#FF2E13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="infoSettings__p">
                            Покинуть аккаунт
                        </p>
                    </button>
                    {
                        open ?  <div className="modal">
                            <div className="modal__window">
                                <h2 className="modal__h2">
                                    Вы действительно хотите выйти?
                                </h2>
                                <div className="modal__box">
                                    <button onClick={logOutOfAccount} className="modal__btn1">Да</button>
                                    <button onClick={() => dispatch(toggleModal())}  className="modal__btn2">Нет</button>
                                </div>

                            </div>
                            <div className="modal__overlay">

                            </div>


                        </div> : null
                    }





                </div>
            </div>
            
        </section>
    );
};

export default InfoSettings;