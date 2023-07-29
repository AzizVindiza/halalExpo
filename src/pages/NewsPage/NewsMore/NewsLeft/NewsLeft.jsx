import React from 'react';
import "./newsleft.sass"
import {useParams} from "react-router-dom";
import {useGetNewsMoreQuery} from "../../../../redux/ApiSlice";
const NewsLeft = () => {
    const params = useParams()
    const  {data = []} = useGetNewsMoreQuery(params.id)
    return (
        <>
            {
                data.filter((el) => el.id !== params.id).map((item) => (
                    <div className={'newsLeft'}>
                        <h2 className="newsLeft__date">{item.date}</h2>
                        <h3 className="newsLeft__title">{item.title}</h3>
                        <div className="newsLeft__pic">
                            <img src={item.image} alt="" className="newsLeft__img"/>
                        </div>
                        <p className="newsLeft__text">{item.description}</p>
                    </div>
                ))
            }
        </>

    );
};

export default NewsLeft;