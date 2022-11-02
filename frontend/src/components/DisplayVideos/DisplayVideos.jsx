import React from 'react';
import Video from '../Video/Video';

const DisplayVideos = (props) => {
    return ( 
        <div>
            {
                props.videos.items.map((item) => {
                    return (
                        <div>
                            
                            <Video item={item}/>

                        </div>

                    )
                })
            }
        </div>
    );
}
 
export default DisplayVideos;