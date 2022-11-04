import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
const DisplayComments = (props) => {
    const [comments, setComments] = useState()
    useEffect(() => {
        fetchComments();
    }, [])
    const fetchComments = async () => {
        const getCommentsUrl = `http://127.0.0.1:8000/api/comments/${props.videoId}/`
        try {
            let response = await axios.get(`${getCommentsUrl}`)
            setComments(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    console.log(comments)
    return (
    <div>
        <p>comments</p>
        <div>
            {comments && comments.map((comment)=> {
                return (
                    <Comment comment={comment} />
                )
            })}
        </div>
 
     
    </div>
    );
}
 
export default DisplayComments;