import React from 'react';
import './gallerySection.sass'

const GallerySection = () => {
    return (
        <section className={"gallerySection"}>
            <div className="gallerySection__container container">
                <h2 className="gallerySection__h2">
                    Галерея
                </h2>
                <div className="gallerySection__box">
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                    <div className="gallerySection__item"></div>
                </div>
            </div>

        </section>
    );
};

export default GallerySection;