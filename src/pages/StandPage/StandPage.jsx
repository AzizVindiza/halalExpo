import React from 'react';
import "./StandPage.sass"
import PackageSection from "./PackageSection/PackageSection";

const StandPage = () => {
    return (
        <section className="stand">
            <h2 className="stand__h2">
                    ОПЦИИ ВЫСТАВОЧНЫХ СТЕНДОВ
            </h2>
            <p className="stand__p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            </p>
            <div className="container__sdand">
                <PackageSection/>
            </div>
        </section>
    );
};

export default StandPage;