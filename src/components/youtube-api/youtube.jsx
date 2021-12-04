import React from 'react';
import './youtube.styles.css';


const YoutubeFetch = () => {
    return (
        <div className="VideoContainerAll ">
            <div
                className="VideoContainer ">
                <iframe style={{
                    margin:"20px",
                    width: "500px"
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/GZvSYJDk-us'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                
            </div>
        </div>
    );
};
export default YoutubeFetch;