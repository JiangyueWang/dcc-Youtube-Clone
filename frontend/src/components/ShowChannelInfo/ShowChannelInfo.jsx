import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { KEY } from "../../localKey";

const ShowChannelInfo = (props) => {
    const channelId = props.item.snippet.channelId;
    const [channel, setChannel] = useState({})
    const [channelImgUrl, setChannelImgUrl] = useState('')
    // const [channelImg, setChannelImg] = useState('')
    useEffect(() => {
        fetchChannelInfo(channelId);
    }, [])
    const fetchChannelInfo = async (id) => {
        const getChannelInfoUrl = `https://www.googleapis.com/youtube/v3/channels?key=${KEY}&id=${id}&part=snippet`;
        try {
            let response = await axios.get(`${getChannelInfoUrl}`);
            setChannel(response.data.items)
            setChannelImgUrl((response.data.items)[0].snippet.thumbnails.default.url)
        } catch(error) {
            console.log(error.message)
        }
    }
    // console.log(channel.items.length)
    // console.log((channel.items)[0].id)

    return ( 
    <div>
        <img src={channelImgUrl}/>
    </div>
    );
}
 
export default ShowChannelInfo;
