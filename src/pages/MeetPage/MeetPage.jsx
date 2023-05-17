import React from 'react';
import Btn from "../../components/Btn/Btn";
import "./meetPage.sass"
const MeetPage = () => {
    return (
        <section className={'meetPage'}>
            <div className="newsPage__content">
                <h2 className="newsPage__title">B2B встречи</h2>
            </div>
            <div className="meetPage__container container">
                <div className="meetPage__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply  </div>
                <button className={'meetPage__btn'}>
                    <p className="meetPage__link">Перейти</p>
                    <span className="meetPage__telegram">
                        <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.9492 0.161497C25.957 0.893919 1.37694 10.3334 1.01366 10.5092C-0.187516 11.0775 -0.328141 11.8275 0.673812 12.3373C0.773421 12.39 2.43162 12.9174 4.37108 13.5209L7.89256 14.6166L15.8847 9.61267C20.2851 6.86462 23.9707 4.57946 24.0762 4.54431C24.3515 4.45056 24.5859 4.45642 24.6914 4.56775C24.7676 4.64392 24.7734 4.67907 24.709 4.7904C24.6738 4.86657 21.75 7.52087 18.2226 10.6849C14.6953 13.8549 11.7949 16.4681 11.7832 16.4974C11.7715 16.5267 11.6543 18.1088 11.5195 20.0131L11.2734 23.4701L11.543 23.4349C11.6894 23.4174 11.918 23.3412 12.0527 23.265C12.1933 23.1947 13.1074 22.3627 14.0976 21.4193C15.082 20.4759 15.9258 19.6849 15.9668 19.6732C16.0078 19.6556 17.5781 20.7689 19.459 22.1459C21.334 23.5228 23.0156 24.7123 23.1973 24.7943C23.6719 25.017 24.1992 25.0345 24.5449 24.8529C24.8555 24.6888 25.1543 24.2787 25.2832 23.8509C25.3301 23.6869 26.4082 18.724 27.668 12.8236C29.7715 3.00329 29.9648 2.05407 29.9648 1.54431C29.9648 1.06384 29.9473 0.946653 29.8183 0.6947C29.7305 0.51306 29.5723 0.331419 29.4199 0.22595C29.0742 -0.0142841 28.5 -0.043581 27.9492 0.161497Z" fill="white"/>
                       </svg>

                    </span>
                </button>
            </div>
        </section>
    );
};

export default MeetPage;