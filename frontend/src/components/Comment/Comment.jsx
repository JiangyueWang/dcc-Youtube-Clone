import React from 'react';
const Comment = (props) => {
    
    return (
    <div>
        <ul>
            <li>{props.comment.user.username}</li>
            <li>{props.comment.text}</li>
        </ul>
    </div>
    );
}
 
export default Comment;