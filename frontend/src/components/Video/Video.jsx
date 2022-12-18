import React from 'react';
import ShowChannelInfo from '../ShowChannelInfo/ShowChannelInfo';
import { Link } from 'react-router-dom';
import "./Video.css"
const Video = (props) => {
    
    return (
    <div className='video-wrapper'>
     <div className='video-inner-wrapper'>
        <img className="video-thumbnails" src={props.item.snippet.thumbnails.medium.url} />
        <div>
        <div className='video-title-link'><Link to={`/${props.item.id.videoId}`}>{props.item.snippet.title}</Link></div>
                
                
            <div className='video-channelicon-title-wrapper'>
                <div className='video-channelicon'>
                    <ShowChannelInfo item={props.item} />
                </div>
                <p className='channel-title'>{props.item.snippet.channelTitle}</p>
            </div>

        </div>

    
    </div>



    </div>
    );
}
 
export default Video;