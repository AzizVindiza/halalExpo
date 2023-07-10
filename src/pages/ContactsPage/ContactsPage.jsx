import React from 'react';
import "./contactsPage.sass"
import ConnectionSection from "./ConectionSection/ConnectionSection";
import ContentSection from "./ContentSection/ContentSection";

const ContactsPage = () => {
    return (
        <div className={"ContactsPage__container"}>
            <ConnectionSection/>
            <ContentSection/>
        </div>
    );
};

export default ContactsPage;