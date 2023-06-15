import React from 'react';
import './zoneCardSmall.sass'

import {HiOutlineArrowRight} from "react-icons/hi"


const ZoneSection = ({item,img}) => {
    console.log(item)
    return (
        <div className={'zona'}>
            <div className="zona__container container">
                <div className="zona__wrapper">
                    <div className="zona__pic">
                        <img  className={'zona__img'} src={img} alt=""/>
                    </div>
                    <div className="zona__box">
                        <h2 className="zona__h2">{item.name}</h2>
                        <div className="zona__inner">
                            <div className="zona__show">
                                <div className="zona__svg">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.86874 0.532813C8.5828 0.673438 8.5078 0.837501 8.49374 1.37656L8.47499 1.85938H6.64686C4.62655 1.85938 4.60311 1.86406 4.39218 2.15938C4.29374 2.3 4.28905 2.35156 4.27499 3.48594L4.26093 4.67188H14.1328H24.0047L23.9906 3.48594C23.9719 1.7375 24.1453 1.85938 21.6141 1.85938H19.7812V1.43281C19.7812 0.748438 19.5797 0.476563 19.0781 0.476563C18.5766 0.476563 18.375 0.748438 18.375 1.43281V1.85938H16.5937H14.8125V1.43281C14.8125 0.748438 14.6109 0.476563 14.1094 0.476563C13.6078 0.476563 13.4062 0.748438 13.4062 1.43281V1.85938H11.6484H9.89061V1.42344C9.89061 1.0625 9.87186 0.964063 9.7828 0.809376C9.59999 0.485938 9.20624 0.364063 8.86874 0.532813Z" fill="#40A865"/>
                                        <path d="M4.19998 6.66875C4.01717 10.1562 2.5781 13.7187 0.492167 15.8469C0.271855 16.0766 0.0656047 16.3156 0.0421672 16.3766C-0.0703328 16.6812 0.0843547 17.0844 0.37498 17.2391C0.529667 17.3234 0.871854 17.3281 9.88123 17.3281C19.0078 17.3281 19.2281 17.3281 19.3969 17.2391C19.4906 17.1875 19.7203 16.9953 19.9031 16.8031C21.1969 15.4766 22.3547 13.4984 23.0344 11.4547C23.5265 9.98281 23.864 8.19219 23.939 6.69687L23.9672 6.07812H14.1H4.23279L4.19998 6.66875Z" fill="#40A865"/>
                                        <path d="M23.8641 13.2781C23.2266 14.8344 22.0266 16.6625 20.9016 17.7922C20.3906 18.2984 20.1609 18.4719 19.7906 18.6125L19.5234 18.7109L11.8922 18.725L4.26562 18.7344V19.8641C4.26562 20.9 4.275 21.0031 4.35937 21.1719C4.42031 21.2937 4.51875 21.3922 4.64062 21.4531C4.82344 21.5469 4.89844 21.5469 14.1328 21.5469C23.3672 21.5469 23.4422 21.5469 23.625 21.4531C23.7469 21.3922 23.8453 21.2937 23.9062 21.1719C24 20.9891 24 20.9187 23.9906 16.9953L23.9766 13.0016L23.8641 13.2781Z" fill="#40A865"/>
                                    </svg>

                                </div>
                                <h3 className="zona__h3">{item.time}</h3>
                            </div>
                            <div className="zona__show">
                                <div className="zona__svg">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="20" fill="white"/>
                                        <g clipPath="url(#clip0_2269_5031)">
                                            <path d="M17.0781 11.2344V13.4687C17.0781 14.021 17.5258 14.4688 18.0781 14.4688H18.4844H18.8906C19.4429 14.4688 19.8906 14.021 19.8906 13.4688V11.2344V9C19.8906 8.44772 19.4429 8 18.8906 8H18.4844H18.0781C17.5258 8 17.0781 8.44771 17.0781 9V11.2344Z" fill="black"/>
                                            <path d="M17.0781 11.2344V13.4687C17.0781 14.021 17.5258 14.4688 18.0781 14.4688H18.4844H18.8906C19.4429 14.4688 19.8906 14.021 19.8906 13.4688V11.2344V9C19.8906 8.44772 19.4429 8 18.8906 8H18.4844H18.0781C17.5258 8 17.0781 8.44771 17.0781 9V11.2344Z" fill="#40A865"/>
                                            <path d="M21.2969 8.703C21.2969 9.09133 21.6117 9.40613 22 9.40613H23.8516C25.5438 9.40613 26.4859 9.42488 26.65 9.45769C27.5313 9.64519 28.2109 10.3858 28.3281 11.2811C28.3516 11.4733 28.375 12.5093 28.375 13.578C28.375 15.7061 28.3938 15.8608 28.6563 16.4093C28.9703 17.0608 29.5563 17.5718 30.2547 17.8014C30.7469 17.9608 31.6234 17.9655 32.0828 17.8061C32.95 17.5061 33.5547 16.9014 33.85 16.0436L33.9252 15.8179C33.9592 15.7159 33.9766 15.6091 33.9766 15.5017V13.2968C33.9766 10.9436 33.9766 10.9296 33.8688 10.578C33.6672 9.9405 33.4141 9.51863 32.9453 9.05457C32.4906 8.59519 32.0875 8.34675 31.4453 8.13581L31.2735 8.07689C31.17 8.04141 31.0614 8.02316 30.952 8.02284L26.2094 8.00925L22.0047 7.99722C21.6141 7.9961 21.2969 8.31242 21.2969 8.703ZM31.1969 9.54207C31.7828 9.77175 32.2797 10.2827 32.4859 10.8686C32.5609 11.0936 32.5703 11.3046 32.5703 13.2968V15.2568C32.5703 15.4015 32.5389 15.5445 32.4783 15.6759L32.4578 15.7202C32.2141 16.2639 31.6984 16.5593 31.075 16.5218C30.5359 16.4843 30.1656 16.2452 29.9078 15.7624C29.8047 15.5749 29.8047 15.5233 29.7766 13.2733C29.7484 11.1077 29.7438 10.9577 29.65 10.6389C29.5328 10.2546 29.3781 9.89832 29.1953 9.59832C29.141 9.51177 29.2045 9.3995 29.3067 9.40156L29.9969 9.4155C30.8219 9.43425 30.9625 9.44832 31.1969 9.54207Z" fill="black"/>
                                            <path d="M21.2969 8.703C21.2969 9.09133 21.6117 9.40613 22 9.40613H23.8516C25.5438 9.40613 26.4859 9.42488 26.65 9.45769C27.5313 9.64519 28.2109 10.3858 28.3281 11.2811C28.3516 11.4733 28.375 12.5093 28.375 13.578C28.375 15.7061 28.3938 15.8608 28.6563 16.4093C28.9703 17.0608 29.5563 17.5718 30.2547 17.8014C30.7469 17.9608 31.6234 17.9655 32.0828 17.8061C32.95 17.5061 33.5547 16.9014 33.85 16.0436L33.9252 15.8179C33.9592 15.7159 33.9766 15.6091 33.9766 15.5017V13.2968C33.9766 10.9436 33.9766 10.9296 33.8688 10.578C33.6672 9.9405 33.4141 9.51863 32.9453 9.05457C32.4906 8.59519 32.0875 8.34675 31.4453 8.13581L31.2735 8.07689C31.17 8.04141 31.0614 8.02316 30.952 8.02284L26.2094 8.00925L22.0047 7.99722C21.6141 7.9961 21.2969 8.31242 21.2969 8.703ZM31.1969 9.54207C31.7828 9.77175 32.2797 10.2827 32.4859 10.8686C32.5609 11.0936 32.5703 11.3046 32.5703 13.2968V15.2568C32.5703 15.4015 32.5389 15.5445 32.4783 15.6759L32.4578 15.7202C32.2141 16.2639 31.6984 16.5593 31.075 16.5218C30.5359 16.4843 30.1656 16.2452 29.9078 15.7624C29.8047 15.5749 29.8047 15.5233 29.7766 13.2733C29.7484 11.1077 29.7438 10.9577 29.65 10.6389C29.5328 10.2546 29.3781 9.89832 29.1953 9.59832C29.141 9.51177 29.2045 9.3995 29.3067 9.40156L29.9969 9.4155C30.8219 9.43425 30.9625 9.44832 31.1969 9.54207Z" fill="#40A865"/>
                                            <path d="M10 21.7578V30C10 31.1046 10.8954 32 12 32H18.4609H24.9219C26.0264 32 26.9219 31.1046 26.9219 30V21.7578V13.5156C26.9219 12.4111 26.0264 11.5156 24.9219 11.5156H24.1094H22.7266C21.937 11.5156 21.2969 12.1557 21.2969 12.9453V13.6719C21.2969 14.0602 21.6117 14.375 22 14.375C22.3883 14.375 22.7031 14.6898 22.7031 15.0781C22.7031 15.4662 22.3881 15.7806 22 15.7797L18.475 15.7719L14.9361 15.7601C14.5502 15.7588 14.2359 15.4498 14.2281 15.0641C14.2204 14.6858 14.5249 14.375 14.9033 14.375H14.9219C15.3102 14.375 15.625 14.0602 15.625 13.6719V12.9453C15.625 12.1557 14.9849 11.5156 14.1953 11.5156H12.8125H12C10.8954 11.5156 10 12.4111 10 13.5156V21.7578ZM19.2719 17.2953C21.1562 17.8437 21.9109 20.1453 20.7156 21.7062C20.6172 21.8281 20.5563 21.9453 20.5797 21.9641C20.5984 21.9828 20.7391 22.0766 20.8891 22.175C21.2453 22.4141 21.8875 23.0984 22.1078 23.4734C22.5156 24.1672 22.7031 24.9172 22.7031 25.8406C22.7031 26.1356 22.4637 26.3745 22.1688 26.3738L18.475 26.3656L14.8844 26.3537C14.5309 26.3525 14.2464 26.0629 14.2516 25.7094C14.2609 24.7297 14.4766 24.0125 14.9734 23.2766C15.2313 22.8922 15.7563 22.3672 16.1172 22.1328C16.1428 22.1165 16.1679 22.1005 16.192 22.085C16.3412 21.9894 16.3759 21.8611 16.2625 21.725C16.0516 21.4812 15.8359 21.05 15.7422 20.7031C15.6531 20.3703 15.6531 19.6297 15.7422 19.2969C16 18.3219 16.7969 17.5062 17.7344 17.2625C18.1469 17.1547 18.8266 17.1687 19.2719 17.2953ZM14.9219 28.4844C14.9219 28.8727 14.6071 29.1875 14.2188 29.1875C13.8304 29.1875 13.5156 28.8727 13.5156 28.4844C13.5156 28.096 13.8304 27.7812 14.2188 27.7812C14.6071 27.7812 14.9219 28.096 14.9219 28.4844ZM17.7719 28.4703C17.7641 28.8553 17.4538 29.1703 17.0688 29.1781C16.6879 29.1858 16.375 28.8792 16.375 28.4983V28.4844C16.375 28.096 16.6898 27.7812 17.0781 27.7812H17.0967C17.4751 27.7812 17.7796 28.092 17.7719 28.4703ZM20.5938 28.4844C20.5938 28.8727 20.279 29.1875 19.8906 29.1875C19.5023 29.1875 19.1875 28.8727 19.1875 28.4844C19.1875 28.096 19.5023 27.7812 19.8906 27.7812C20.279 27.7812 20.5938 28.096 20.5938 28.4844ZM23.4063 28.4844C23.4063 28.8727 23.0915 29.1875 22.7031 29.1875C22.3148 29.1875 22 28.8727 22 28.4844C22 28.096 22.3148 27.7812 22.7031 27.7812C23.0915 27.7812 23.4063 28.096 23.4063 28.4844Z" fill="black"/>
                                            <path d="M10 21.7578V30C10 31.1046 10.8954 32 12 32H18.4609H24.9219C26.0264 32 26.9219 31.1046 26.9219 30V21.7578V13.5156C26.9219 12.4111 26.0264 11.5156 24.9219 11.5156H24.1094H22.7266C21.937 11.5156 21.2969 12.1557 21.2969 12.9453V13.6719C21.2969 14.0602 21.6117 14.375 22 14.375C22.3883 14.375 22.7031 14.6898 22.7031 15.0781C22.7031 15.4662 22.3881 15.7806 22 15.7797L18.475 15.7719L14.9361 15.7601C14.5502 15.7588 14.2359 15.4498 14.2281 15.0641C14.2204 14.6858 14.5249 14.375 14.9033 14.375H14.9219C15.3102 14.375 15.625 14.0602 15.625 13.6719V12.9453C15.625 12.1557 14.9849 11.5156 14.1953 11.5156H12.8125H12C10.8954 11.5156 10 12.4111 10 13.5156V21.7578ZM19.2719 17.2953C21.1562 17.8437 21.9109 20.1453 20.7156 21.7062C20.6172 21.8281 20.5563 21.9453 20.5797 21.9641C20.5984 21.9828 20.7391 22.0766 20.8891 22.175C21.2453 22.4141 21.8875 23.0984 22.1078 23.4734C22.5156 24.1672 22.7031 24.9172 22.7031 25.8406C22.7031 26.1356 22.4637 26.3745 22.1688 26.3738L18.475 26.3656L14.8844 26.3537C14.5309 26.3525 14.2464 26.0629 14.2516 25.7094C14.2609 24.7297 14.4766 24.0125 14.9734 23.2766C15.2313 22.8922 15.7563 22.3672 16.1172 22.1328C16.1428 22.1165 16.1679 22.1005 16.192 22.085C16.3412 21.9894 16.3759 21.8611 16.2625 21.725C16.0516 21.4812 15.8359 21.05 15.7422 20.7031C15.6531 20.3703 15.6531 19.6297 15.7422 19.2969C16 18.3219 16.7969 17.5062 17.7344 17.2625C18.1469 17.1547 18.8266 17.1687 19.2719 17.2953ZM14.9219 28.4844C14.9219 28.8727 14.6071 29.1875 14.2188 29.1875C13.8304 29.1875 13.5156 28.8727 13.5156 28.4844C13.5156 28.096 13.8304 27.7812 14.2188 27.7812C14.6071 27.7812 14.9219 28.096 14.9219 28.4844ZM17.7719 28.4703C17.7641 28.8553 17.4538 29.1703 17.0688 29.1781C16.6879 29.1858 16.375 28.8792 16.375 28.4983V28.4844C16.375 28.096 16.6898 27.7812 17.0781 27.7812H17.0967C17.4751 27.7812 17.7796 28.092 17.7719 28.4703ZM20.5938 28.4844C20.5938 28.8727 20.279 29.1875 19.8906 29.1875C19.5023 29.1875 19.1875 28.8727 19.1875 28.4844C19.1875 28.096 19.5023 27.7812 19.8906 27.7812C20.279 27.7812 20.5938 28.096 20.5938 28.4844ZM23.4063 28.4844C23.4063 28.8727 23.0915 29.1875 22.7031 29.1875C22.3148 29.1875 22 28.8727 22 28.4844C22 28.096 22.3148 27.7812 22.7031 27.7812C23.0915 27.7812 23.4063 28.096 23.4063 28.4844Z" fill="#40A865"/>
                                            <path d="M17.9781 18.6826C17.6453 18.7951 17.4109 18.9919 17.2422 19.3013C17.1156 19.531 17.1016 19.5966 17.1016 19.9763C17.1016 20.3419 17.1203 20.431 17.2281 20.6326C17.7812 21.6779 19.2344 21.6498 19.75 20.5857C19.9094 20.2576 19.9094 19.7513 19.7547 19.3997C19.4594 18.7482 18.6953 18.4341 17.9781 18.6826Z" fill="black"/>
                                            <path d="M17.9781 18.6826C17.6453 18.7951 17.4109 18.9919 17.2422 19.3013C17.1156 19.531 17.1016 19.5966 17.1016 19.9763C17.1016 20.3419 17.1203 20.431 17.2281 20.6326C17.7812 21.6779 19.2344 21.6498 19.75 20.5857C19.9094 20.2576 19.9094 19.7513 19.7547 19.3997C19.4594 18.7482 18.6953 18.4341 17.9781 18.6826Z" fill="#40A865"/>
                                            <path d="M17.9078 22.8828C17.7344 22.9156 17.4297 23.0234 17.2281 23.1219C16.5953 23.4266 15.925 24.2 15.7844 24.7906L15.7563 24.9219H18.475H21.1984L21.1609 24.7906C21.0391 24.3828 20.6969 23.8437 20.3781 23.5625C19.7031 22.9719 18.7469 22.7047 17.9078 22.8828Z" fill="black"/>
                                            <path d="M17.9078 22.8828C17.7344 22.9156 17.4297 23.0234 17.2281 23.1219C16.5953 23.4266 15.925 24.2 15.7844 24.7906L15.7563 24.9219H18.475H21.1984L21.1609 24.7906C21.0391 24.3828 20.6969 23.8437 20.3781 23.5625C19.7031 22.9719 18.7469 22.7047 17.9078 22.8828Z" fill="#40A865"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2269_5031">
                                                <rect width="24" height="24" fill="white" transform="translate(10 8)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <h3 className="zona__h3">{item.participant}</h3>
                            </div>
                        </div>
                        <ul className="zona__list">
                            {item.li.map((item,idx)=>(
                                <li key={idx} className="zona__li"><div className={'zona__circle'}>{idx+1}</div>{item}</li>
                            ))}

                        </ul>
                        <div className="zona__btn">
                            <span className="zona__click">{item.btn}</span>
                            <HiOutlineArrowRight color={'#ffffff'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZoneSection;