import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { KEY } from '../../localKey';
import { DATA } from '../../localData';
import DisplayVideos from '../DisplayVideos/DisplayVideos';
const DisplayRelatedVideos = (props) => {
    console.log(props.videoId)
    const getRelatedVideosURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&type=video&relatedToVideoId=${props.videoId}&part=snippet&maxResults=5`
    const [relatedVideos, setRelatedVideos] = useState();
    useEffect(() => {
        fetchRelatedVideo();
    }, [])
    const fetchRelatedVideo = async () => {
        try {
          let response = await axios.get(`${getRelatedVideosURL}`);
          setRelatedVideos(response.data.items)
        } catch(error) {
          console.log(error.message)
        }
    }

    return (  
        <div>
            {relatedVideos &&<DisplayVideos videos={relatedVideos} />}
        </div>
    );
}
 
export default DisplayRelatedVideos;