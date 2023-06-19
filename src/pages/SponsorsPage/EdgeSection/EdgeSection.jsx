import React from 'react';
import "./edgeSetion.sass"
import EdgeCard from "./EdgeCard/EdgeCard";
import brand from './brand.svg'
import halal from './halal.svg'
import people from './people.svg'
import truba from './truba.svg'
import get from './get.svg'
import {useTranslation} from "react-i18next";




const EdgeSection = () => {
    const {t} = useTranslation()
    return (
        <section className={'edgeSection'}>
            <div className="edgeSection__container container">
                <h3 className="edgeSection__h3">{t("sponsorsPage.Benefits")}</h3>
                <div className="edgeSection__wrapper">
                    <EdgeCard img={truba} item={t("sponsorsPage.EdgeCard.Recognition",{returnObjects:true})}/>
                    <EdgeCard img={brand} item={t("sponsorsPage.EdgeCard.Brand",{returnObjects:true})}/>
                    <EdgeCard img={people} item={t("sponsorsPage.EdgeCard.Networking",{returnObjects:true})}/>
                    <EdgeCard img={get} item={t("sponsorsPage.EdgeCard.Getting",{returnObjects:true})}/>
                    <EdgeCard img={halal} item={t("sponsorsPage.EdgeCard.Supporting",{returnObjects:true})}/>
                    {/*<EdgeCard item={{img:brand, h2:'Продвижение бренда',p:"Участие в качестве спонсора дает вам возможность расширить свою аудиторию и продвигать свой бренд в качестве ведущего игрока на рынке халяльной продукции и услуг."}}/>*/}
                    {/*<EdgeCard item={{img:people, h2:'Возможность установления деловых контактов',p:"Возможность установления деловых контактов. Наше мероприятие предоставляет уникальную возможность встретиться и установить связи с ключевыми игроками халяльной индустрии, включая производителей, дистрибьюторов. А также представить инвестиционные проекты инвесторам из стран арабского мира."}}/>*/}
                    {/*<EdgeCard item={{img:get, h2:'Получение эксклюзивных преимуществ.',p:"В качестве спонсора, вы можете получить эксклюзивные преимущества, такие как выделение вашего логотипа на материалах мероприятия, участие в презентации продуктов и услуг на главной сцене и другие."}}/>*/}
                    {/*<EdgeCard item={{img:halal, h2:'Поддержка развития халяльной индустрии',p:"Участие в качестве спонсора поможет развитию халяльной индустрии в регионе и поддержит растущий спрос на халяльную продукцию и услуги."}}/>*/}

                </div>
            </div>

        </section>
    );
};

export default EdgeSection;