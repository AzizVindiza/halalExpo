import React from 'react';
import "./SearchSection.sass"


const SearchSection = () => {
    return (
        <section className="search">
            <label  className="search__label">
                <input placeholder={'Поиск по названию'} type="text" className="search__input"/>
                <span className="search__svg">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="#99BCE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </span>
            </label>
        </section>
    );
};

export default SearchSection;