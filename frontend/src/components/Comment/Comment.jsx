import React from 'react';
import "./Comment.css"
const Comment = (props) => {
    
    return (
    <div className='comment-wrapper'>
        <h3>{props.comment.user.username}</h3>
        <p>{props.comment.text}</p>
    </div>
    );
}
 
export default Comment;