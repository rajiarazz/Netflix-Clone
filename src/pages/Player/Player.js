import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../../axios";
import { API_KEY } from "../../constants/constants";
import './Player.css'

function Player() {

const { id } = useParams(); // Use useParams to get the movie ID from the URL
const navigate = useNavigate();
    const [urlId, setUrlId] = useState('')
    const opts = {
        height: '390',
        width: '90%',
        frameBorder:'0',
    
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      useEffect(()=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
          }
          else{
            console.log("Trailer not available");
          }
        })
      },[id]);
  return (
    <div>
        {urlId&&
      <div className="player">
      <i class="fa-solid fa-lg fa-arrow-left" onClick={()=>(navigate(-2))}></i>

      <YouTube videoId={urlId.key} opts={opts} style={{flex:'1'}}/>
      </div>}
    </div>
  )
}

export default Player