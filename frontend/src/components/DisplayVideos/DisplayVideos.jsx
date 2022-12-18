import React from 'react';
import Video from '../Video/Video';
import "./DisplayVideo.css";

const DisplayVideos = (props) => {
    return ( 
        <div className='videos-wrapper'>
            {
                props.videos.map((item) => {
                    return (
                        <div>
                            <Video item={item} key={item.id.videoId}/>
                        </div>
                        
                    )
                })
            }
        </div>
    );

}
 
export default DisplayVideos;