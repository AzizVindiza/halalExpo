import React from 'react';
import "./tableSection.sass"

const TableSection = () => {
    return (
        <section className={'tableSection'}>
            <div className="container tableSection__container">
                {/*<h2 className="tableSection__h2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h2>*/}
                <div className="tableSection__wrapper">
                    <div className="tableSection__block">
                        <h3 className="tableSection__h3">Lorem Ipsum</h3>
                        <div className="tableSection__inner">

                            <a className="tableSection__txt">www.cibic.info</a>
                        </div>
                    </div>
                    <div className="tableSection__block">
                        <h3 className="tableSection__h3">Lorem Ipsum</h3>
                        <div className="tableSection__inner">

                            <a className="tableSection__txt">www.ameca.site</a>
                        </div>
                    </div>
                    <div className="tableSection__block">
                        <h3 className="tableSection__h3">Lorem Ipsum</h3>
                        <div className="tableSection__inner">

                            <a className="tableSection__txt">www.idfca.info</a>
                        </div>
                    </div>
                    <div className="tableSection__block">
                        <h3 className="tableSection__h3">Lorem Ipsum</h3>
                        <div className="tableSection__inner">

                            <a className="tableSection__txt">www.itcsmart.com</a>
                        </div>
                    </div>
                    <div className="tableSection__block">
                        <h3 className="tableSection__h3">Lorem Ipsum</h3>
                        <div className="tableSection__inner">
                            <a className="tableSection__txt">www.odadmiral.com</a>
                        </div>
                    </div>
                    <div className="tableSection__block">
                        <h3 className="tableSection__h3">Lorem Ipsum</h3>
                        <div className="tableSection__inner">

                            <a className="tableSection__txt">www.city312.kg</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableSection;