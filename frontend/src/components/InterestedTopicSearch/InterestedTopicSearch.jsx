import React, { useState } from 'react';
const InterestedTopicSearch = (props) => {
    const [interestedTopic, setInteresedTopic] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        props.getTopic(interestedTopic);
    }
    return (  
    <form onSubmit={handleSubmit}>
        <label>your interested topic</label>
        <br></br>
        <input type="text" onChange={(event) => setInteresedTopic(event.target.value)}></input>
        <br></br>
        <br></br>
        <button type="submit">search</button>
    </form>
    );
}
 
export default InterestedTopicSearch;