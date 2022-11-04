import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { KEY } from '../../localKey';
import { DATA } from '../../localData';
import DisplayVideos from '../DisplayVideos/DisplayVideos';
const DisplayRelatedVideos = (props) => {
    const [relatedVideos, setRelatedVideos] = useState(DATA.items);

    // const fetchRelatedVideo = async () => {
    //     const getURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&q=${props.videoId}&maxResults=5&type=video&part=snippet`
    //     try {
    //       let response = await axios.get(`${getURL}`);
    //       setRelatedVideos(response.data.items)
    //     } catch(error) {
    //       console.log(error.message)
    //     }
    // }
    console.log(relatedVideos)
    // fetchRelatedVideo();
    return (  
        <div>
            <p>div inside the DisplayRelatedVideos {props.videoId}</p>
            <DisplayRelatedVideos viodes={relatedVideos} />
            {/* <div>{
                relatedVideos.map((item) => {
                    return console.log(item)
                })
            }</div> */}
        </div>
    );
}
 
export default DisplayRelatedVideos;