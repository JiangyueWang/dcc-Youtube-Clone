import React from 'react';
import Video from '../Video/Video';

const DisplayVideos = (props) => {
    if(props.videos.length > 1) {
    return ( 
        <div>
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
    return <div></div>

}
 
export default DisplayVideos;