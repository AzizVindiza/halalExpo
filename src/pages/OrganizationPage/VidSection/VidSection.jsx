import React from 'react';
import "./VidSection.sass"

const VidSection = () => {
    return (
        <section className="vid">
            <div className="vid__container container">
                <div className="vid__video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mtg2T6NC8aI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>

        </section>
    );
};

export default VidSection;