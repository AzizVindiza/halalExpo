import React, {useState} from 'react';
import video from "./loading.mp4"
import "./loader.sass"
const Loader = () => {
    return (
        <div className={'loader'}>
            <video className={'loader__video'} src={video} autoPlay={true} muted={true} loop={true}/>
        </div>
    );
};

export default Loader;
















// import * as React from 'react';
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
// import "./loader.sass"
// const Loader = () =>{
//     const [progress, setProgress] = React.useState(0);
//     const [buffer, setBuffer] = React.useState(10);
//
//     const progressRef = React.useRef(() => {});
//     React.useEffect(() => {
//         progressRef.current = () => {
//             if (progress > 100) {
//                 setProgress(0);
//                 setBuffer(10);
//             } else {
//                 const diff = Math.random() * 10;
//                 const diff2 = Math.random() * 10;
//                 setProgress(progress + diff);
//                 setBuffer(progress + diff + diff2);
//             }
//         };
//     });
//
//     React.useEffect(() => {
//         const timer = setInterval(() => {
//             progressRef.current();
//         }, 500);
//
//         return () => {
//             clearInterval(timer);
//         };
//     }, []);
//
//     return (
//         <div className={'loader'}>
//             <Box  sx={{ width: '50%' }}>
//                 <h2 className={'loader__h2'}>Loading...</h2>
//                 <LinearProgress  variant="buffer" value={progress} valueBuffer={buffer} />
//             </Box>
//         </div>
//     );
// }
//
// export default Loader