import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayRelatedVideos from '../../components/DisplayRelatedVideos/DisplayRelatedVideos';
import { useParams } from 'react-router-dom';
import { KEY } from '../../localKey';
const VideoPage = (props) => {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});
    
    useEffect(() => {
        fetchVideo();
    },[videoId])
    const fetchVideo = async () => {
        const videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&part=snippet&id=${videoId}}`
        console.log(videoUrl)
        try {
            let response = await axios.get(`${videoUrl}`);
            console.log(response.data)
            setVideo(response.data)
        } catch(error) {
            console.log(error.message)
        }
    }
    return ( 
    <div>
        <div>
            <p>this is a video page for video {videoId}</p>
            <iframe id="ytplayer" 
                    type="text/html" width="640" height="360" 
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameborder="0">

            </iframe>
        </div>
        <DisplayRelatedVideos videoId={videoId} />
    </div>


    );
}
 
export default VideoPage;