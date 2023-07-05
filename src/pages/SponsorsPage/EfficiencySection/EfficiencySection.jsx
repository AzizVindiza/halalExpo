import React from 'react';
import './efficiencySection.sass'
import {useTranslation} from "react-i18next";




const EfficiencySection = () => {
    const {t} = useTranslation()

    return (
        <section className={"efficiency"}>
            <div className="efficiency__container container">
                {/*<div className="efficiency__back">*/}

                {/*</div>*/}
                <div className="efficiency__wrapper">
                    <div className="efficiency__box">
                        <h2 className="efficiency__h2">{t("sponsorsPage.title1")}</h2>
                        <p className="efficiency__p">{t("sponsorsPage.text1")}</p>

                    </div>
                    <div className="efficiency__box">
                        <h2 className="efficiency__h2">{t("sponsorsPage.title2")}</h2>
                        <ul className="efficiency__ul">
                            <li className="efficiency__li">{t("sponsorsPage.li1")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li2")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li3")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li4")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li5")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li6")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li7")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li8")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li9")}</li>
                            <li className="efficiency__li">{t("sponsorsPage.li10")}</li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default EfficiencySection;