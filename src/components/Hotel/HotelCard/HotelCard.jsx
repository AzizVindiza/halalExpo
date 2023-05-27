import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./hotelCard.sass"
const HotelCard = () => {
    return (
        <div className={'hotelCard'}>
            <div className="hotelCard__wrapper">
                <div className="hotelCard__pic">
                    <img src={''} className={'hotelCard__img'} alt=""/>
                </div>
                <div className="hotelCard__box">
                    <h3 className="hotelCard__h3">Lorem Ipsum is simply dummy</h3>
                    <p className="hotelCard__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                    <div className="hotelCard__next">
                        <h4 className="hotelCard__link">Перейти на сайт</h4>
                        <div className="hotelCard__line">
                            <span className="hotelCard__svg">
                                <HiOutlineArrowNarrowRight
                                    color={'#0057BC'}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hotelCard__map">
                    <div className="hotelCard__location">
                        <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.81472 0.031641C6.73171 0.274218 5.16022 0.991405 3.75749 2.34141C2.57096 3.49101 1.74304 4.98867 1.41081 6.60234C1.28952 7.18242 1.20514 8.24238 1.24733 8.70117C1.40553 10.6207 2.1069 12.15 4.01589 14.7656C7.08503 18.9686 9.46862 22.2012 9.50026 22.2012C9.57409 22.2012 15.0848 14.676 15.8548 13.5264C16.6827 12.2871 17.1046 11.4539 17.4368 10.3887C17.6899 9.58184 17.7532 9.14414 17.7479 8.25293C17.7374 5.94316 16.8831 3.93398 15.243 2.34668C14.0143 1.16016 12.5852 0.427149 10.9241 0.131836C10.4811 0.0527344 9.16804 -0.0105476 8.81472 0.031641ZM10.3757 2.76855C11.6044 2.96894 12.6801 3.53848 13.5397 4.44551C15.3063 6.30703 15.5753 9.11777 14.1831 11.2904C12.5219 13.885 8.98874 14.618 6.42057 12.8988C4.41667 11.5594 3.49382 9.10723 4.12663 6.79746C4.26374 6.28066 4.73307 5.33145 5.06003 4.9043C6.29929 3.26953 8.36647 2.4416 10.3757 2.76855Z" fill="#0057BC"/>
                            <path d="M8.83054 4.32481C7.29597 4.6043 6.07253 5.72754 5.64011 7.26211C5.55574 7.57324 5.52409 7.81582 5.52937 8.25352C5.52937 8.98125 5.62956 9.41895 5.95124 10.0729C6.16218 10.5 6.27292 10.6477 6.70007 11.0748C7.1114 11.4861 7.2907 11.6232 7.65456 11.8025C8.2821 12.1137 8.81472 12.2402 9.50027 12.2402C10.1858 12.2402 10.7184 12.1137 11.346 11.8025C11.9577 11.4967 12.6907 10.7689 13.0176 10.152C13.5503 9.12891 13.6399 8.00039 13.2602 6.93516C12.8278 5.71699 11.7731 4.73613 10.5286 4.40391C10.1436 4.30371 9.20495 4.26152 8.83054 4.32481Z" fill="#0057BC"/>
                            <path d="M1.65859 23.8736L0.493164 26.9744L4.99668 26.9902C7.47519 26.9955 11.5252 26.9955 14.0037 26.9902L18.5072 26.9744L17.3418 23.8736L16.1764 20.7781H14.357L12.5324 20.7833L11.0031 22.84C9.82715 24.4167 9.46328 24.8808 9.42109 24.8228C9.39473 24.7806 8.71445 23.8578 7.91816 22.7662L6.46797 20.7833L4.64863 20.7781H2.8293L1.65859 23.8736Z" fill="#0057BC"/>
                        </svg>
                    </div>
                    <h4 className="hotelCard__text">НАКАРТЕ</h4>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;