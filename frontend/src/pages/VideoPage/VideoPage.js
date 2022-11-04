import React from 'react';
import DisplayRelatedVideos from '../../components/DisplayRelatedVideos/DisplayRelatedVideos';
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import { useParams } from 'react-router-dom';


const VideoPage = (props) => {
    const { videoId } = useParams();
    const videoIdP = videoId;

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
        <DisplayComments videoId={videoIdP}/>
        <DisplayRelatedVideos videoId={videoIdP}/>
    </div>


    );
}
 
export default VideoPage;