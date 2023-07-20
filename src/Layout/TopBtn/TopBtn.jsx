import React from 'react'
import "./topBtn.sass"

const TopBtn = () => {
    const handleScrollToTop = () => {
        window.scrollTo({top: 0 , behavior: "smooth"})
    }
    return (
        <button className={"topBtn"} onClick={()=>handleScrollToTop() }>
            <svg width="48" height="48" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2287_1073)">
                    <circle cx="34" cy="34" r="24" fill="white"/>
                </g>
                <path d="M33 41C33 41.5523 33.4477 42 34 42C34.5523 42 35 41.5523 35 41L33 41ZM34.7071 26.2929C34.3166 25.9024 33.6834 25.9024 33.2929 26.2929L26.9289 32.6569C26.5384 33.0474 26.5384 33.6805 26.9289 34.0711C27.3195 34.4616 27.9526 34.4616 28.3431 34.0711L34 28.4142L39.6569 34.0711C40.0474 34.4616 40.6805 34.4616 41.0711 34.0711C41.4616 33.6805 41.4616 33.0474 41.0711 32.6569L34.7071 26.2929ZM35 41L35 27L33 27L33 41L35 41Z" fill="#0033CC"/>
            </svg>
        </button>
    );
};

export default TopBtn;