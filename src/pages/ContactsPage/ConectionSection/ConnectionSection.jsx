import React from 'react';
import "./connectionSection.sass"
const ConnectionSection = () => {
    return (
        <section className={'connectionSection'}>
           <div className="container connectionSection__container">
               <h2 className="connectionSection__title">Контакты</h2>
               <div className="connectionSection__wrapper">
                   <div className="connectionSection__box">
                       <div className="connectionSection__block">
                           <div className="connectionSection__oval">
                               <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M17.7053 19.0458C18.0878 19.2289 18.5442 19.1508 18.8441 18.8509L20.8833 16.8117C22.3637 17.3288 23.9348 17.6515 25.5656 17.7495C25.5888 17.7509 25.6073 17.7608 25.6184 17.7722C25.6227 17.7765 25.6245 17.7796 25.625 17.7807C25.625 17.7809 25.625 17.781 25.625 17.7812V22.625C25.625 24.331 24.2657 25.5605 22.7902 25.3358C11.9162 23.6796 3.32043 15.0838 1.66419 4.20978C1.43945 2.73428 2.669 1.375 4.375 1.375H9.21875C9.21897 1.375 9.21915 1.375 9.2193 1.37501C9.22037 1.37554 9.22352 1.37732 9.22784 1.38157C9.23917 1.39269 9.2491 1.41116 9.25049 1.43441C9.34849 3.0652 9.67119 4.63635 10.1883 6.11674L8.14908 8.15594C7.84922 8.4558 7.7711 8.91219 7.95416 9.29472C9.99276 13.5546 13.4454 17.0072 17.7053 19.0458Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               </svg>

                           </div>
                           <p className="connectionSection__p">+996 (502) 022 220</p>
                       </div>
                       <div className="connectionSection__block">
                           <div className="connectionSection__oval">
                               <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5.375 10.2087C5.375 9.15011 6.23312 8.29199 7.29167 8.29199H27.7083C28.7669 8.29199 29.625 9.15011 29.625 10.2087V24.792C29.625 25.8505 28.7669 26.7087 27.7083 26.7087H7.29167C6.23312 26.7087 5.375 25.8505 5.375 24.792V10.2087Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                   <path d="M29.1663 10.208L17.4997 18.958L5.83301 10.208" stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                               </svg>


                           </div>
                           <p className="connectionSection__p">hitexpo2023@gmail.com</p>
                       </div>
                       <div className="connectionSection__block">
                           <div className="connectionSection__oval">
                               <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <ellipse cx="17.4997" cy="16.0417" rx="2.91667" ry="2.91667" stroke="white" strokeWidth="2"/>
                                   <path d="M17.5004 32.0833L25.5212 24.0625C29.951 19.6327 29.951 12.4506 25.5212 8.02084C21.0914 3.59106 13.9093 3.59106 9.47956 8.02084C5.04978 12.4506 5.04978 19.6327 9.47956 24.0625L17.5004 32.0833Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                               </svg>

                           </div>
                           <p className="connectionSection__p">Кыргызская Республика,<br/>
                               г. Бишкек,ул. Тоголок Молдо 3Б</p>
                       </div>
                   </div>

               </div>
           </div>
        </section>
    );
};

export default ConnectionSection;