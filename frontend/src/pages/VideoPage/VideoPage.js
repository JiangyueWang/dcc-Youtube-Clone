import { React, useState , useEffect} from 'react';
import DisplayRelatedVideos from '../../components/DisplayRelatedVideos/DisplayRelatedVideos';
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import PostComment from '../../components/PostComment/PostComment';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";

const VideoPage = (props) => {
    const { videoId } = useParams();
    const videoIdP = videoId;


    const [comments, setComments] = useState()
    useEffect(() => {
        fetchComments();
    }, [])
    
    const fetchComments = async () => {
        const getCommentsUrl = `http://127.0.0.1:8000/api/comments/${videoId}/`
        try {
            let response = await axios.get(`${getCommentsUrl}`)
            setComments(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const [user, token] = useAuth();
    async function postCommentFn(commentInfo) {
        const postCommentUrl = `http://127.0.0.1:8000/api/comments/`
        try {
            await axios.post(`${postCommentUrl}`, commentInfo, {
            headers: {
              Authorization: "Bearer " + token,}
            })
        } catch (error) {
            console.log(error.message)
        }
        fetchComments();
    }

    return ( 
    <div>
        <div>
            <p>this is a video page for video {videoId}</p>
            {/* <iframe id="ytplayer" 
                    type="text/html" width="640" height="360" 
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameborder="0">

            </iframe> */}
        </div>
        <PostComment videoId={videoIdP} postComment={postCommentFn}/>
        {comments && <DisplayComments comments={comments}/>}
        <DisplayRelatedVideos videoId={videoIdP}/>
    </div>


    );
}
 
export default VideoPage;