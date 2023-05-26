import React from 'react';
import "./OfficeMapSection.sass"
const OfficeMapSection = () => {
    return (
        <section className="office">
            <div className="office__container container_fluid">
                <div className="office__txt">
                    <a className={"office__link"} href="tel:+996508312012">
                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#10923E"/>
                            <path d="M39.125 37.6598C38.8132 37.5942 38.5038 37.522 38.1971 37.4432C38.2383 37.405 38.2789 37.3658 38.3189 37.3258L38.9006 36.7442C38.9752 36.7614 39.05 36.7783 39.125 36.7948V37.6598ZM22.6742 21.6811C22.6342 21.7211 22.595 21.7617 22.5568 21.803C22.478 21.4962 22.4058 21.1868 22.3402 20.875H23.2052C23.2217 20.95 23.2386 21.0248 23.2558 21.0994L22.6742 21.6811Z" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {/*+996 (508) 312 012*/}
                        +996 (502) 022 220
                    </a>
                    <a className={"office__link"} href="mailto:info@ameca.site">
                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#10923E"/>
                            <path d="M18.375 22.2087C18.375 21.1501 19.2331 20.292 20.2917 20.292H40.7083C41.7669 20.292 42.625 21.1501 42.625 22.2087V36.792C42.625 37.8505 41.7669 38.7087 40.7083 38.7087H20.2917C19.2331 38.7087 18.375 37.8505 18.375 36.792V22.2087Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M42.1667 22.208L30.5 30.958L18.8334 22.208" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        {/*info@ameca.site*/}
                        hitexpo2023@gmail.com
                    </a>
                    <a className={"office__link"} href="https://goo.gl/maps/S1gXNZEyAanEQaES8">
                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#10923E"/>
                            <ellipse cx="30.5" cy="28.0417" rx="2.91667" ry="2.91667" stroke="white" strokeWidth="2"/>
                            <path d="M30.5 44.0831L38.5209 36.0622C42.9506 31.6325 42.9506 24.4504 38.5209 20.0206C34.0911 15.5908 26.909 15.5908 22.4792 20.0206C18.0494 24.4504 18.0494 31.6325 22.4792 36.0622L30.5 44.0831Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                        Кыргызская Республика, <br/>
                        г. Бишкек,ул. Тоголок Молдо 3Б
                    </a>
                </div>
                <div className="office__map">
                    <iframe
                        title="office"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1420.3532011374264!2d74.59631993147053!3d42.87399713525015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDUyJzI2LjciTiA3NMKwMzUnNDYuOCJF!5e0!3m2!1sru!2skg!4v1684220271865!5m2!1sru!2skg"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

export default OfficeMapSection;