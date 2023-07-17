import React from 'react';
import "./contactsForm.sass"
import Btn from "../../../../components/Btn/Btn";
import {useAddFeedbackMutation} from "../../../../redux/ApiSlice";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
const ContactsForm = () => {
    const [addFeedback] = useAddFeedbackMutation()
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data, error) => {
        try {
            console.log(data)
            addFeedback(data)
                .unwrap()
                .then(() => {
                    toast.success('Заявка отпралена!Мы свяжемся с Вами в близжайшее время!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
                .catch(() => {
                    toast.error('Ошибка в сервере!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })

        } catch (error) {
            toast.error('Ошибка в сервере!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


    }

    return (
        <section className={'contactsForm'}>
            <div className="container contactsForm__container">
                <div className="contactsForm__box">
                    <div className="contactsForm__wrapper">
                        <h2 className="contactsForm__h2">Обратная связь</h2>
                        <div className="contactsForm__line"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="contactsForm__form">
                        <label  className="contactsForm__label">
                            <input placeholder={'Name'} type="text" className="contactsForm__input"{...register("name",{
                                required: {
                                    message: "Это поле обязательно к заполнению!",
                                    value: true
                                }
                            })}
                            />
                        </label>
                        <label  className="contactsForm__label">
                            <input placeholder={'mail'} type="email" className="contactsForm__input" {...register("mail",{
                                required: {
                                    message: "Это поле обязательно к заполнению!",
                                    value: true
                                }
                            })}
                            />
                        </label>
                        <label  className="contactsForm__label">
                            <input placeholder={'phone'} type="text" className="contactsForm__input"{...register("phone",{
                                required: {
                                    message: "Это поле обязательно к заполнению!",
                                    value: true
                                }
                            })}
                            />
                        </label>

                        <label  className="contactsForm__label ">
                            <textarea  placeholder={'description'}  className="contactsForm__input textarea" {...register("description",{
                                required: {
                                    message: "Это поле обязательно к заполнению!",
                                    value: true
                                }
                            })}/>
                        </label>
                        <div className="contactsForm__btn">
                            <Btn  type={"submit"} text={'ОТПРАВИТЬ'}/>
                        </div>
                    </form>

                </div>

             </div>
        </section>
    );
};

export default ContactsForm;