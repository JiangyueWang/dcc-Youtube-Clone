import React from 'react';
import Video from '../Video/Video';

const DisplayVideos = (props) => {
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
 
export default DisplayVideos;