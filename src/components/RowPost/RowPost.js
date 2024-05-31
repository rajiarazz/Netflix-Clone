import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import { useNavigate } from 'react-router-dom';
function RowPost(props) {
  const [movie, setMovie] = useState([])
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    
    axios.get(props.url).then(response=>{
      setMovie(response.data.results)
    })
  
  }, [props.url])
  const handleMovie = (id) => {
    navigate(`/player/${id}`); // Use navigate to redirect to the Player page
  };

  return (
    <div className={props.isBannerPost?'banner-row-post':'row-post'}>
      <h4>{props.title}</h4>
      <div className="posters">
        {movie.map((cards)=>
          <img onClick={()=>handleMovie(cards.id)}
          className={props.isLarge?'large-poster':'poster-img'}
          src={`${imageUrl + cards.backdrop_path}`}
          alt="card_img"
        />
        )}
        
        
      </div>
        
      
      
    </div>
  );
}

export default RowPost;
