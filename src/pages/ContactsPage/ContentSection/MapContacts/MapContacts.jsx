import React from 'react';

const MapContacts = () => {
    return (
        <section className={'mapContacts'}>
            <div className="mapContacts mapContacts__container">
                <div className="mapContacts__map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4607.7357179856745!2d74.60042399242414!3d42.87863699970236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e74697b7a5%3A0xb625d929c04e872e!2z0J_QsNGA0Log0J_QsNC90YTQuNC70L7QstCw!5e0!3m2!1sru!2skg!4v1682581919768!5m2!1sru!2skg"
                        width="600" height="346" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapContacts;