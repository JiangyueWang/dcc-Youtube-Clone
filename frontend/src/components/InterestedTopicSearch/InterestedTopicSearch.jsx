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
        <input type="text" onChange={(event) => setInteresedTopic(event.target.value)}></input>
        <button type="submit">search</button>
    </form>
    );
}
 
export default InterestedTopicSearch;