import React from 'react';
import './SpeakersSection.sass'
import img from './img.png'
import img2 from './img2.png'
import Btn from "../../../components/Btn/Btn";
const SpeakersSection = () => {
    return (
        <section className="speaker">
            <div className="speaker__container container">
                <h2 className="speaker__h2">Спикеры</h2>
                <div className="speaker__cards">

                    <div className="speaker__card_wrapper">
                        <div className="speaker__card">
                            <div className="speaker__txt">
                                <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                                <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                            </div>
                            <div className="speaker__bg">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="speaker__bg">
                                <img src={img} alt=""/>
                            </div>

                        </div>
                        <div className="speaker__sm-text">
                            <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                            <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                        </div>
                    </div>
                    <div className="speaker__card_wrapper">
                        <div className="speaker__card">
                            <div className="speaker__txt">
                                <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                                <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                            </div>
                            <div className="speaker__bg">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="speaker__bg">
                                <img src={img} alt=""/>
                            </div>

                        </div>
                        <div className="speaker__sm-text">
                            <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                            <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                        </div>
                    </div>
                    <div className="speaker__card_wrapper">
                        <div className="speaker__card">
                            <div className="speaker__txt">
                                <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                                <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                            </div>
                            <div className="speaker__bg">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="speaker__bg">
                                <img src={img} alt=""/>
                            </div>

                        </div>
                        <div className="speaker__sm-text">
                            <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                            <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                        </div>
                    </div>
                    <div className="speaker__card_wrapper">
                        <div className="speaker__card">
                            <div className="speaker__txt">
                                <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                                <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                            </div>
                            <div className="speaker__bg">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="speaker__bg">
                                <img src={img} alt=""/>
                            </div>

                        </div>
                        <div className="speaker__sm-text">
                            <h3 className="speaker__h3">Тилек Токтогазиев</h3>
                            <p className="speaker__p">Генеральный директор ОсОО «Гринери», экс-министр сельского хозяйства, пищевой промышленности и мелиорации КР</p>
                        </div>
                    </div>


                </div>
                <a className="speaker__btn" href="">
                    <Btn m={"big btn_border"} type="button" text="Все спикеры"/>
                </a>
            </div>
        </section>
    );
};

export default SpeakersSection;