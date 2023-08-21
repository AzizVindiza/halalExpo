import React from 'react';
import './BenefitsPage.sass'
import CardMembers from "./CardMembers/CardMembers";
import CardPdf from "./CaardPdf/CardPdf";

import figure from "./figure.png"


const BenefitsPage = () => {
    const arr = [

        {
            title : "Возможность презентации и продвижения",
            text : "Мероприятие предоставляет уникальную платформу для представления вашей компании, продуктов, услуг и инвестиционных проектов перед широкой аудиторией. Вы сможете привлечь внимание потенциальных инвесторов, партнеров и клиентов.",
            svg : "../asserts/BenefitsPageImg/promotion.svg"
        },
        {
            title : "Расширение деловых контактов",
            text : "Выставка соберет ведущих представителей халяльной индустрии, инвесторов, предпринимателей и профессионалов. Ваше участие даст возможность установить новые связи, расширить сеть контактов и создать ценные деловые партнерства.",
            svg : "../asserts/BenefitsPageImg/contact.svg"
        },
        {
            title : "Инновационные идеи и проекты",
            text : "Halal Investment and Trade Expo 2023 представит перед вами широкий спектр инновационных халяльных проектов и идей. Вы сможете узнать о последних тенденциях и развитии в отрасли, а также обменяться опытом с экспертами и профессионалами.",
            svg : "../asserts/BenefitsPageImg/projects.svg"
        },
        {
            title : "Международный охват",
            text : "Halal Investment and Trade Expo 2023 привлечет участников и гостей из разных стран мира. Это даст вам возможность расширить вашу глобальную видимость, установить международные связи и исследовать новые рынки.",
            svg : "../asserts/BenefitsPageImg/coverage.svg"
        },
        {
            title : "Поддержка со стороны организаторов",
            text : "Организаторы выставки обеспечат профессиональную поддержку, включая маркетинговую и PR-поддержку, помощь с организационными вопросами, а также предоставление необходимой информации и готовых выставочных стендов.",
            svg : "../asserts/BenefitsPageImg/organizer.svg"
        }
    ]


    return (
        <section className="benefits">
            <div className="benefits__photo">
                <img src={figure} alt=""/>
            </div>

            <div className="benefits__container container">
                <h2 className="benefits__h2">
                    Преимущества для участников
                </h2>
                <div className="benefits__wrapper">

                    {
                        arr.map((item) => (
                            <CardMembers members={{svg:`${item.svg}`,title:`${item.title}`,p:`${item.text}`}}/>
                        ))
                    }

                </div>

                <CardPdf/>

            </div>


        </section>
    );
};

export default BenefitsPage;