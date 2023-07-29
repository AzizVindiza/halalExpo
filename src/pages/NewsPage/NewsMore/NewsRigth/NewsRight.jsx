import React from 'react';
import Btn from "../../../../components/Btn/Btn";
import "./newsright.sass"
import {useGetNewsInNewsPageQuery} from "../../../../redux/ApiSlice";
const NewsRight = () => {
    const {data: data = []} = useGetNewsInNewsPageQuery()
    return (

        <div className={'newsRight'}>
            {
                data.map((item) => (
                    <div className="newsRight__block">
                        <div className="newsRight__pic">
                            <img src={item.image} alt="" className="newsRight__img"/>
                        </div>
                        <h2 className="newsRight__date">{item.date}</h2>
                        <h3 className="newsRight__h3">{item.title}</h3>
                        <p className="newsRight__p">{item.description.slice(0,100) + "..."}</p>
                        <button className={'newsRight__next'}>Читать далее</button>
                    </div>
                ))
            }
        </div>
    );
};

export default NewsRight;