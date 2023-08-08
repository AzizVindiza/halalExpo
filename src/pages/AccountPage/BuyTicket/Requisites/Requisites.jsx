import React from 'react';
import "./requisites.sass"


const Requisites = () => {
    return (
        <div className={"requisites"}>
            <div className="requisites__container">
                <h2 className="requisites__h2">
                    Реквизиты
                </h2>
                <div className="requisites__wrapper">

                    <div className="requisites__box">
                        <h3 className="requisites__h3">
                            Стоимость посещения 3 (трёх) дней выставки:
                        </h3>
                        <span className={"requisites__span"}>2000 сомов ($23)</span>
                        <h3 className="requisites__h3">
                            Единоразовая оплата
                        </h3>
                        <div className="requisites__check">
                            <h3 className="requisites__h3">
                                Загрузите чек за оплату билета
                            </h3>
                            <label htmlFor="file" className="requisites__label">
                                <input type="file" id={"file"} className={"requisites__input"} />


                            </label>
 `                       </div>
                    </div>
                    <div className="requisites__box">
                        <h4 className="requisites__h4">
                            Реквизиты для  оплаты
                        </h4>
                        <p className={"requisites__p"}>
                            Кыргызская Республика <br/>
                            г. Бишкек, <br/>
                            ул. Тоголок Молдо, 3 б <br/>
                            ОКПО: 124012 <br/>
                            УГНС: Первомайского района <br/>
                            г. Бишкек (004) <br/>
                            ИНН: 01011202210103 <br/>
                            ОАО «Банк-Бакай» <br/>
                            БИК: 124012 <br/>
                            р/с: 1240020001066497
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Requisites;