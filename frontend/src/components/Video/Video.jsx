import React from 'react';
import ShowChannelInfo from '../ShowChannelInfo/ShowChannelInfo';
const Video = (props) => {

    return (
    <div>

        <img src={props.item.snippet.thumbnails.medium.url} />
        <div>
            <ShowChannelInfo item={props.item} />
            <p>{props.item.snippet.title}</p>
            <p>{props.item.snippet.channelTitle}</p>

        </div>

    </div>
    );
}
 
export default Video;