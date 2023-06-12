import React from 'react';
import ReactPlayer from "react-player";
import video from "./day.mp4";
import "./reactVideo.sass"
const ReactVideo = () => {
    return (
       <div className={'reactVideo'}>
           <ReactPlayer width={"100vw"} height={"100vh"} playing muted  url={video} />
       </div>
    );
};

export default ReactVideo;