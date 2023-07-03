import React from 'react';
import './tableCard.sass'

const TableCard = ({item}) => {
    return (
        <div className="tableCard">
            <div className="tableCard__wrapper">
                <div className="tableCard__box">
                    <div className="tableCard__img">
                        <img src={item.img} alt=""/>
                    </div>
                    <h2 className="tableCard__h2">
                        {item.h2} <span className="tableCard__span">{item.span}</span>
                    </h2>
                </div>
                <div className="tableCard__bottom">
                    <div className="tableCard__row">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4097_5850)">
                                <path d="M14.9945 0.540283H5.70809C4.27186 0.541804 2.8949 1.10731 1.87934 2.11272C0.863771 3.11813 0.292552 4.48132 0.291016 5.90319V15.0967C0.292552 16.5186 0.863771 17.8818 1.87934 18.8872C2.8949 19.8926 4.27186 20.4581 5.70809 20.4596H14.9945C16.4307 20.4581 17.8077 19.8926 18.8233 18.8872C19.8388 17.8818 20.41 16.5186 20.4116 15.0967V5.90319C20.41 4.48132 19.8388 3.11813 18.8233 2.11272C17.8077 1.10731 16.4307 0.541804 14.9945 0.540283ZM10.3513 15.0967C9.43296 15.0967 8.53524 14.8271 7.77167 14.322C7.0081 13.8169 6.41297 13.099 6.06153 12.2591C5.7101 11.4191 5.61815 10.4949 5.79731 9.60317C5.97647 8.71149 6.41869 7.89242 7.06805 7.24955C7.71742 6.60668 8.54476 6.16888 9.44545 5.99151C10.3461 5.81414 11.2797 5.90518 12.1282 6.25309C12.9766 6.60101 13.7018 7.19019 14.212 7.94613C14.7222 8.70206 14.9945 9.5908 14.9945 10.5C14.9932 11.7187 14.5036 12.8872 13.6331 13.749C12.7626 14.6108 11.5824 15.0955 10.3513 15.0967ZM16.1553 5.90319C15.9257 5.90319 15.7013 5.83579 15.5104 5.70951C15.3195 5.58324 15.1707 5.40376 15.0829 5.19377C14.995 4.98378 14.972 4.75272 15.0168 4.5298C15.0616 4.30687 15.1722 4.10211 15.3345 3.94139C15.4968 3.78067 15.7037 3.67122 15.9288 3.62688C16.154 3.58254 16.3874 3.6053 16.5995 3.69228C16.8116 3.77926 16.9929 3.92655 17.1205 4.11553C17.248 4.30452 17.3161 4.5267 17.3161 4.75399C17.3161 5.05878 17.1938 5.35108 16.9761 5.5666C16.7584 5.78211 16.4632 5.90319 16.1553 5.90319ZM13.4468 10.5C13.4468 11.1061 13.2652 11.6986 12.9251 12.2025C12.585 12.7065 12.1015 13.0993 11.5359 13.3312C10.9703 13.5631 10.3479 13.6238 9.7474 13.5056C9.14694 13.3873 8.59538 13.0955 8.16247 12.6669C7.72956 12.2383 7.43474 11.6923 7.3153 11.0978C7.19586 10.5034 7.25716 9.88719 7.49145 9.32722C7.72574 8.76725 8.1225 8.28864 8.63154 7.95191C9.14059 7.61517 9.73907 7.43544 10.3513 7.43544C11.1723 7.43544 11.9596 7.75831 12.5401 8.33302C13.1206 8.90773 13.4468 9.6872 13.4468 10.5Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4097_5850">
                                    <rect width="20.202" height="20" fill="white" transform="translate(0.25 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <a href="" className="tableCard__a">
                            Instagram
                        </a>

                    </div>
                    <div className="tableCard__row2">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.25 22.5C17.7728 22.5 22.25 18.0228 22.25 12.5C22.25 6.97715 17.7728 2.5 12.25 2.5C6.72715 2.5 2.25 6.97715 2.25 12.5C2.25 18.0228 6.72715 22.5 12.25 22.5Z" stroke="#3378C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.25 12.5H22.25" stroke="#3378C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.25 2.5C14.7513 5.23835 16.1728 8.79203 16.25 12.5C16.1728 16.208 14.7513 19.7616 12.25 22.5C9.74872 19.7616 8.32725 16.208 8.25 12.5C8.32725 8.79203 9.74872 5.23835 12.25 2.5V2.5Z" stroke="#3378C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <a href="" className="tableCard__a">
                            {item.site}
                        </a>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default TableCard;