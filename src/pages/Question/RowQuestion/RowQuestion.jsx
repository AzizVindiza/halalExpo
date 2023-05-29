import React, {useState} from 'react';
import "./rowQuestion.sass"
const RowQuestion = () => {
    const [selected,setSelected] = useState(null)
    //function accordion//
      const toggle = (index) => {
        if (selected === index){

            setSelected(null)
        }else
            setSelected(index)

    }
    const  arr = [
        {
            title: "Разнообразие халяльных продуктов и услуг",
            text:"Будучи посетителем, вы сможетеознакомиться с широким ассортиментом халяльных продуктов, услуг и инвестиционных проектов, а также обнаружить новые бренды и идеи, которые соответствуют принципам халяльности. "
        },
        {
            title: "Инвестиционные возможности",
            text:"Выставка предоставит посетителям возможность ознакомиться с инвестиционными проектами и привлекательными предложениями от местных и зарубежных компаний. Вы сможете изучить потенциальные возможности для инвестиций и сотрудничества. "
        },
        {
            title: "Бизнес-сеть и партнерство",
            text:"Бизнес-сеть и партнерство\n" +
                "Halal Investment and Trade Expo 2023 соберет представителей бизнеса, инвесторов, предпринимателей и профессионалов из разных стран и областей деятельности. Это ваша уникальная возможность установить новые деловые контакты, обменяться опытом и создать ценные партнерства."
        },
        {
            title: "Культурное разнообразие",
            text:"Выставка также представит возможность погрузиться в атмосферу культурного разнообразия народов, проживающих в Центральной Азии. Посетители смогут насладиться вкусными халяльными блюдами, познакомиться с традиционными ремеслами и узнать больше о культуре и искусстве региона. "
        }

    ]
    return (
        <div className={'rowQuestion'} >
            {
                arr.map((item,index) => (
                    <div onClick={() => toggle(index)}  className="rowQuestion__block">


                        <div  className="rowQuestion__wrapper">
                            <p className="rowQuestion__p">{item.title}</p>
                            <div  className="rowQuestion__svg">
                                {
                                    selected === index
                                        ?
                                        <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 1H0.999981" stroke="#0057BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        :
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.5 12H3.49998" stroke="#0057BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.5 3V21.0001" stroke="#0057BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                }

                            </div>
                        </div>
                        <p className={`rowQuestion__txt ${selected === index ? 'rowQuestion__txt_active' : ''}`}>{item.text}</p>






                    </div>

                ))
            }



        </div>
    );
};

export default RowQuestion;