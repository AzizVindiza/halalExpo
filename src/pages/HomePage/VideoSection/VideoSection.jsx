import React from 'react';
import './VideoSection.sass'
import './VideoBanner/Banner'
import Banner from "./VideoBanner/Banner";
const VideoSection = () => {
    return (
        <section className="video">
            <div className="video__container container">
                <div className="video__iframe">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FlE9rRQKqcM"
                                title="YouTube video player"
                                allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    
                </div>




            </div>
            <Banner/>




        </section>
    );
};

export default VideoSection;