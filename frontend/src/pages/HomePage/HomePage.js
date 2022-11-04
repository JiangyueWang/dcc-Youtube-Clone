import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey";
import { DATA } from "../../localData";
import axios from "axios";
import InterestedTopicSearch from "../../components/InterestedTopicSearch/InterestedTopicSearch";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();


  // state variable to capture all the videos fetched via Youtube API
  const [videos, setVideos] = useState();
  // const [videos, setVideos] = useState(DATA);
 
  // state variable the stores user's interested topics
  const [interestedTopic, setInteresedTopic] = useState('')
  // const getURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&q=${interestedTopic}&maxResults=5&type=video&part=snippet`

  useEffect(() => {
    interestedTopic&&fetchVideos(interestedTopic);
  }, [interestedTopic])

  const getTopic = (topic) => {
    setInteresedTopic(topic);
  }

  const fetchVideos = async (topic) => {
    const getURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&q=${topic}&maxResults=5&type=video&part=snippet`
    try {
      let response = await axios.get(`${getURL}`);
      setVideos(response.data.items)
    } catch(error) {
      console.log(error.message)
    }
  }
  
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <InterestedTopicSearch getTopic={getTopic}/>
      {videos && <DisplayVideos videos={videos} />}
    </div>
  );
};

export default HomePage;