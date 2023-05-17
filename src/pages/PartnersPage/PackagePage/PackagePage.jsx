import React from 'react';
import PackageCart from "./PackageCart/PackageCart";
import "./packagePage.sass"
const PackagePage = () => {
    return (
        <section className={'packagePage'}>
            <div className="packagePage__container container">
                <h2 className={'packagePage__title'}>Партнерские пакеты</h2>
                <div className="packagePage__wrapper">
                  <PackageCart/>
                  <PackageCart/>
                  <PackageCart/>
                  <PackageCart/>
                  <PackageCart/>
                  <PackageCart/>
                </div>
            </div>
        </section>
    );
};

export default PackagePage;