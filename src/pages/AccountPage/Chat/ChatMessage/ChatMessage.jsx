import React, {useState} from 'react';
import "./chatMessage.sass"
import company from "../img/company.svg"
import {useLocation} from "react-router-dom";



const ChatMessage = () => {
    const location = useLocation()
    console.log(location)
    const [active,setActive] = useState(false)


    return (
        <div className={"chatMessage"}>
           <div className={"chatMessage__wrapper"}>
               <div className="chatMessage__box">
                   <div className="chatMessage__img">
                       <img src={company} alt=""/>
                   </div>

                 <div className={"chatMessage__company"}>
                     <h2 className="chatMessage__h2">
                         Allchips Limited
                     </h2>
                     <p className="chatMessage__p">
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry
                     </p>
                 </div>
               </div>
               <div className={"chatMessage__row"}>
                   <h3 className="chatMessage__h3">
                       {
                           location.pathname === "/account/chat/draft" ? 'Черновик' : ""
                       }
                   </h3>
                   <span className="chatMessage__span">12.07.2023</span>
                   <svg width="18" height="17" viewBox="0 0 18 17" fill="black" xmlns="http://www.w3.org/2000/svg">
                       <path d="M9 0.618034L10.6574 5.71885C10.7912 6.13087 11.1752 6.40983 11.6084 6.40983H16.9717L12.6327 9.56231C12.2822 9.81695 12.1356 10.2683 12.2694 10.6803L13.9268 15.7812L9.58779 12.6287C9.2373 12.374 8.7627 12.374 8.41222 12.6287L4.0732 15.7812L5.73056 10.6803C5.86443 10.2683 5.71777 9.81695 5.36729 9.56231L5.07339 9.96681L5.36729 9.56231L1.02828 6.40983H6.39159C6.82481 6.40983 7.20877 6.13087 7.34265 5.71885L9 0.618034Z" stroke="black" strokeOpacity="0.3"/>
                   </svg>
               </div>

           </div>



        </div>
    );
};

export default ChatMessage;