import React from 'react';
import "./newsmore.sass"
import NewsLeft from "./NewsLeft/NewsLeft";
import NewsRight from "./NewsRigth/NewsRight";
import {useNavigate} from "react-router-dom";
const NewsMore = () => {
    const navigate = useNavigate()
    return (
        <div className={'newsmore'}>
            <div className="container newsmore__container">
                <div className="newsmore__back">
                    <div onClick={() => navigate(-1)} className="newsmore__svg">
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.93636" cy="8.13411" r="7.60482" fill="#D9E2FF"/>
                            <path d="M21.0718 8.82611C21.4536 8.82611 21.7631 8.51659 21.7631 8.13477C21.7631 7.75295 21.4536 7.44342 21.0718 7.44342V8.82611ZM7.44733 7.64591C7.17734 7.9159 7.17734 8.35363 7.44733 8.62362L11.847 13.0233C12.117 13.2933 12.5548 13.2933 12.8247 13.0233C13.0947 12.7533 13.0947 12.3156 12.8247 12.0456L8.9139 8.13477L12.8247 4.22392C13.0947 3.95393 13.0947 3.51619 12.8247 3.2462C12.5548 2.97622 12.117 2.97622 11.847 3.2462L7.44733 7.64591ZM21.0718 7.44342L7.93618 7.44342V8.82611L21.0718 8.82611V7.44342Z" fill="#494949"/>
                        </svg>
                    </div>
                    <h2 className="newsmore__h2">Новости</h2>
                </div>
                <div className="newsmore__wrapper">
                    <NewsLeft/>
                    <NewsRight/>
                </div>
            </div>
        </div>
    );
};

export default NewsMore;