import { React, useState } from 'react';

const PostComment = (props) => {

    const [commentText, setCommentText] = useState()
    function handleSubmit(event) {
        event.preventDefault();
        const commentInfo = {
            "text": commentText,
            "video_id": props.videoId,
        } 
        props.postComment(commentInfo)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <input placeholder='Add a comment' onChange={(event) => {setCommentText(event.target.value)}}></input>
            <button type='submit'>Comment</button>
        </form>
    );
}
 
export default PostComment;