import React from 'react';
import ShowChannelInfo from '../ShowChannelInfo/ShowChannelInfo';
import { Link } from 'react-router-dom';
const Video = (props) => {
    
    return (
    <div>

        <img src={props.item.snippet.thumbnails.medium.url} />
        <div>
            <ShowChannelInfo item={props.item} />
            <Link to={`/${props.item.id.videoId}`}>{props.item.snippet.title}</Link>
            <p>{props.item.snippet.channelTitle}</p>
            

        </div>

    </div>
    );
}
 
export default Video;