import React from 'react';
import "./contentSection.sass"
import ContactsForm from "./ContactsForm/ContactsForm";
import MapContacts from "./MapContacts/MapContacts";
const ContentSection = () => {
    return (
        <div className={'contentSection'}>
            <div className="contentSection__container container">
                <ContactsForm/>
                <MapContacts/>
            </div>
        </div>
    );
};

export default ContentSection;