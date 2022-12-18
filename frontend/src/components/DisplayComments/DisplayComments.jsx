import React from 'react';
import Comment from '../Comment/Comment';

const DisplayComments = (props) => {

    return (
    <div>
        <h2>Comments</h2>
        <div>
            {props.comments.map((comment)=> {
                return (
                    <Comment comment={comment} key={comment.id}/>
                )
            })}
        </div>
 
     
    </div>
    );
}
 
export default DisplayComments;