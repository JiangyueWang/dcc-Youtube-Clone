import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey";
import { DATA } from "../../localData";
import axios from "axios";
import InterestedTopicSearch from "../../components/InterestedTopicSearch/InterestedTopicSearch";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();


  // state variable to capture all the videos fetched via Youtube API
  const [videos, setVideos] = useState({});
  // const [items, setItems] = useState(DATA.items);
  // const [ids, setIds] = useState({});
  
 
  // state variable the stores user's interested topics
  const [interestedTopic, setInteresedTopic] = useState('')
  // const getURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&q=${interestedTopic}&maxResults=5&type=video&part=snippet`

  useEffect(() => {
    fetchVideos(interestedTopic);
  }, [interestedTopic]);

  const getTopic = (topic) => {
    setInteresedTopic(topic)
  }

  const fetchVideos = async (topic) => {
    const getURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&q=${topic}&maxResults=5&type=video&part=snippet`
    console.log(getURL)
    try {
      let response = await axios.get(`${getURL}`);
      setVideos(response.data)
    } catch(error) {
      console.log(error.message)
    }
  }
  console.log(videos)

  // console.log(items)
  // console.log(items.map((item) => {
  //   return console.log(item.snippet.thumbnails.high.url)
  // }))



  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <InterestedTopicSearch getTopic={getTopic}/>
    </div>
  );
};

export default HomePage;