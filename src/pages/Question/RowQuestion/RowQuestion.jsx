import React, {useState} from 'react';
import "./rowQuestion.sass"
const RowQuestion = () => {
    const [selected,setSelected] = useState(null)
    const toggle = (index) => {
        if (selected === index){
            setSelected(null)
        }else
            setSelected(index)
    }
    const  arr = [
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "
        },
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "
        },
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "
        },
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when "
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
                                    selected === index ?  <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        {
                            selected === index ? <p className="rowQuestion__txt">{item.text}</p> : ''

                        }





                    </div>

                ))
            }



        </div>
    );
};

export default RowQuestion;