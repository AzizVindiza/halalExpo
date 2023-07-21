import React from 'react';
import "./transferSection.sass"
import trans from "../img/trans.png"
import trans2 from "../img/trans2.png"



const TransferSection = () => {
    return (
        <section className="transferSection">
            <div className="transferSection__container ">
                    <div className="transferSection__wrapper ">
                        <h2 className="transferSection__h2 container">
                            Halal Investment and Trade Expo 2023 ждёт вас!
                        </h2>
                        <p className="transferSection__p container">
                            Рады представить вам возможность забронировать комфортабельный трансфер на современных Mercedes Sprinter, что стало возможным после заключения партнёрства с компанией VIP Kortege. Для вашего комфорта и безопасности мы предлагаем эту возможность во время выставки Halal Investment and Trade Expo 2023.
                        </p>
                        <div className="transferSection__img">
                            <img className="transferSection__img1" src={trans} alt=""/>
                            <img className="transferSection__img2" src={trans2} alt=""/>

                        </div>
                        <p className="transferSection__p2 container">
                            Также  мы сотрудничаем с несколькими отелями, которые готовы предложить вам особую выгоду. При бронировании проживания в этих отелях, упомяните название нашей выставки, и вы получите эксклюзивную скидку. Это прекрасная возможность сэкономить на вашем проживании во время выставки. Отели будут проверять список участников и посетителей, чтобы удостовериться, что вы являетесь частью нашего события, и предоставят вам специальную цену.
                            <br/>
                            <br/>
                            Мы предлагаем два варианта для бронирования проживания на выставке Halal Investment and Trade Expo 2023:

                        </p>


                    </div>
            </div>

        </section>
    );
};

export default TransferSection;