import React from 'react';
import './VideoSection.sass'
const VideoSection = () => {
    return (
        <section className="video">
            <div className="video__container container_fluid">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LXb3EKWsInQ?controls=1&modestbranding=1&autohide=1&showinfo=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
        </section>
    );
};

export default VideoSection;