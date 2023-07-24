import React from 'react';
import "./chatHeader.sass"
import {headerArr} from "./HeaderArr/HeaderArr";
const ChatHeader = () => {
    return (
        <div className={'chat'}>
            {
                headerArr.map((item) => (
                    <div className={'chat__link'}>
                        <div className="chat__img">
                            <img src={item.img} alt="" className="chat__pic"/>
                        </div>
                        <p className="chat__p">
                            {item.title}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default ChatHeader;