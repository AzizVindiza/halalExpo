import React, {useContext, useRef, useState} from 'react';
import {CustomContext} from "../../../../../Context";
import "./componentZone.sass"
import Btn from "../../../../../components/Btn/Btn";
import InvestZone from "./InvestZone/InvestZone";
import SwiperZone from "./SwiperZone/SwiperZone";
import FoodZone from "./FoodZone/FoodZone";

import FashionZone from "./FahionZone/FashionZone";
import TradeZone from "./TradeZone/TradeZone";
import trade1 from "./Picture/trade-1.png"
import trade2 from "./Picture/trade-2.png"
import invest from  "./Picture/invest-1.png"
import invest2 from  "./Picture/invest-2.png"
import invest3 from  "./Picture/invest-3.png"
import invest4 from  "./Picture/invest-4.png"
import fashion from "./Picture/fashion.png"
import food from "./Picture/food-1.png"
import foo2 from "./Picture/food-2.png"
const ComponentZone = () => {
    const {chooseZone,setState,chooseIndustry} = useContext(CustomContext)
    const [clickTrade,setClickTrade] = useState()
    const [ClickInvest,setClickInvest] = useState()
    const [ClickFashion,setClickFashion] = useState()
    const [ClickFood,setClickFood] = useState()
    const prevRefTrade = useRef(null)
    const nextRefTrade = useRef(null)
    const prevRefInvest = useRef(null)
    const nextRefInvest = useRef(null)
    const prevRefFashion = useRef(null)
    const nextRefFashion = useRef(null)
    const prevRefFood = useRef(null)
    const nextRefFood = useRef(null)

    // create custom navigation buttons for swiper in react

    return (
        <div className={'componentZone'}>
            <div className="componentZone__wrapper">
                <div className="componentZone__left">
                    <div onClick={() => setState('default')} className="componentZone__line">
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.5869 21.3042C12.2842 21.5569 11.9346 21.7474 11.5582 21.8648C11.1818 21.9822 10.786 22.0243 10.3933 21.9887C10.0006 21.953 9.61881 21.8403 9.26973 21.657C8.92065 21.4736 8.61113 21.2233 8.35889 20.9202L1.69288 12.9202C1.20609 12.3067 0.978511 11.5272 1.05877 10.7481C1.13903 9.96904 1.52077 9.25225 2.12242 8.75087C2.72408 8.24949 3.49795 8.00327 4.27871 8.06481C5.05947 8.12635 5.78521 8.49077 6.30088 9.08022L12.9689 17.0802C13.4779 17.6914 13.7234 18.4796 13.6513 19.2717C13.5793 20.0638 13.1977 20.7949 12.5869 21.3042Z"
                                      fill="#3378C9"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.5872 0.696349C13.1981 1.2057 13.5817 1.93677 13.6537 2.72885C13.7257 3.52094 13.4802 4.3092 12.9712 4.92035L6.30322 12.9204C6.05458 13.2337 5.74578 13.4942 5.39498 13.6865C5.04419 13.8787 4.65849 13.9989 4.26057 14.0399C3.86265 14.0809 3.46055 14.0419 3.07793 13.9252C2.6953 13.8085 2.33988 13.6164 2.03257 13.3603C1.72526 13.1042 1.47228 12.7893 1.28849 12.434C1.1047 12.0787 0.993834 11.6902 0.962401 11.2914C0.930968 10.8926 0.979607 10.4916 1.10546 10.1118C1.23131 9.73213 1.43183 9.38142 1.69522 9.08035L8.36122 1.08035C8.61345 0.777593 8.92285 0.52749 9.27175 0.344332C9.62066 0.161175 10.0022 0.0485521 10.3947 0.0128923C10.7871 -0.0227665 11.1827 0.019238 11.5589 0.136508C11.9351 0.253777 12.2846 0.444012 12.5872 0.696349Z"
                                      fill="#3378C9"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5 11C5 10.2044 5.31607 9.44129 5.87868 8.87868C6.44129 8.31607 7.20435 8 8 8L24 8C24.7957 8 25.5587 8.31607 26.1213 8.87868C26.6839 9.44129 27 10.2043 27 11C27 11.7956 26.6839 12.5587 26.1213 13.1213C25.5587 13.6839 24.7957 14 24 14L8 14C7.20435 14 6.44129 13.6839 5.87868 13.1213C5.31607 12.5587 5 11.7956 5 11Z"
                                      fill="#3378C9"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.3057 23.7684C10.102 23.9381 9.83927 24.0199 9.57524 23.9959C9.31121 23.9719 9.06752 23.844 8.89774 23.6404L2.23174 15.6404C2.14394 15.54 2.0771 15.4231 2.03515 15.2966C1.9932 15.17 1.97699 15.0363 1.98747 14.9034C1.99794 14.7705 2.0349 14.641 2.09616 14.5225C2.15743 14.4041 2.24175 14.2991 2.34419 14.2137C2.44663 14.1284 2.5651 14.0644 2.69264 14.0255C2.82018 13.9866 2.95422 13.9736 3.08686 13.9872C3.2195 14.0009 3.34806 14.0409 3.46499 14.105C3.58193 14.1691 3.68486 14.2559 3.76774 14.3604L10.4337 22.3604C10.6034 22.5641 10.6852 22.8269 10.6612 23.0909C10.6372 23.3549 10.5094 23.5986 10.3057 23.7684Z"
                                  fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.3057 6.23212C10.5094 6.4019 10.6372 6.64559 10.6612 6.90962C10.6852 7.17365 10.6034 7.4364 10.4337 7.64012L3.76774 15.6401C3.68486 15.7446 3.58193 15.8314 3.46499 15.8955C3.34806 15.9596 3.2195 15.9996 3.08686 16.0133C2.95422 16.027 2.82018 16.014 2.69264 15.9751C2.5651 15.9362 2.44663 15.8721 2.34419 15.7868C2.24175 15.7014 2.15743 15.5964 2.09616 15.478C2.0349 15.3596 1.99794 15.2301 1.98747 15.0971C1.97699 14.9642 1.9932 14.8305 2.03515 14.7039C2.0771 14.5774 2.14394 14.4605 2.23174 14.3601L8.89774 6.36012C9.06752 6.1565 9.31121 6.02863 9.57524 6.00463C9.83927 5.98063 10.102 6.06245 10.3057 6.23212Z"
                                  fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3 15C3 14.7348 3.10536 14.4804 3.29289 14.2929C3.48043 14.1054 3.73478 14 4 14L23 14C23.2652 14 23.5196 14.1054 23.7071 14.2929C23.8946 14.4804 24 14.7348 24 15C24 15.2652 23.8946 15.5196 23.7071 15.7071C23.5196 15.8946 23.2652 16 23 16L4 16C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15Z"
                                  fill="black"/>
                        </svg>
                    </div>
                    <div className="componentZone__wrapp">
                        <h2 className="componentZone__h2">{chooseZone} Zone</h2>
                        <div className="componentZone">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L6 6L1 1" stroke="#3962D1" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="componentZone__right">
                    <h2 className="componentZone__h2">{chooseIndustry}</h2>
                    <div className="componentZone__">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L6 6L1 1" stroke="#3962D1" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>
            </div>
            <div className="componentZone__row">
                <div className="componentZone__circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2"
                              d="M21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C14.387 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                              fill="black"/>
                        <path
                            d="M13.5 16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.3522 17.25 11.9706 17.092 11.6893 16.8107C11.408 16.5294 11.25 16.1478 11.25 15.75V12C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5C11.6478 10.5 12.0294 10.658 12.3107 10.9393C12.592 11.2206 12.75 11.6022 12.75 12V15.75C12.9489 15.75 13.1397 15.829 13.2803 15.9697C13.421 16.1103 13.5 16.3011 13.5 16.5ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12ZM11.625 9C11.8475 9 12.065 8.93402 12.25 8.8104C12.435 8.68679 12.5792 8.51109 12.6644 8.30552C12.7495 8.09995 12.7718 7.87375 12.7284 7.65552C12.685 7.43729 12.5778 7.23684 12.4205 7.0795C12.2632 6.92217 12.0627 6.81502 11.8445 6.77162C11.6263 6.72821 11.4001 6.75049 11.1945 6.83564C10.9889 6.92078 10.8132 7.06498 10.6896 7.24998C10.566 7.43499 10.5 7.6525 10.5 7.875C10.5 8.17337 10.6185 8.45952 10.8295 8.6705C11.0405 8.88147 11.3266 9 11.625 9Z"
                            fill="black"/>
                    </svg>
                </div>
                <p className="componentZone__p">
                    Тщательно ознакомьтесь с условиями и возможностями пакета, так как в последующем изменить выбор
                    будет невозможно
                </p>
            </div>
            {
                chooseZone === "Trade" ?  <TradeZone setClickTrade={setClickTrade} prevRefTrade={prevRefTrade} nextRefTrade={nextRefTrade} trade1={trade1} trade2={trade2}/> :
                    chooseZone === "Invest" ? <InvestZone setClickInvest={setClickInvest} prevRefInvest={prevRefInvest} nextRefInvest={nextRefInvest} invest={invest} invest2={invest2} invest3={invest3} invest4={invest4}/> :
                        chooseZone === 'Fashion' ? <FashionZone setClickFashion={setClickFashion} prevRefFashion={prevRefFashion} nextRefFashion={nextRefFashion}   fashion={fashion}/> :
                            chooseZone === "Food" ? <FoodZone setClickFood={setClickFood} prevRefFood={prevRefFood} nextRefFood={nextRefFood} food={food} food2={foo2}/>  : ""
            }


        </div>
    );
};

export default ComponentZone;