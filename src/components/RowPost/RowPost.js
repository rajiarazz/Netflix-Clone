import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
function RowPost(props) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    
    axios.get(props.url).then(response=>{
      setMovie(response.data.results)
    })
  
  }, [props.url])
  

  return (
    <div className={props.isBannerPost?'banner-row-post':'row-post'}>
      <h4>{props.title}</h4>
      <div className="posters">
        {movie.map((cards)=>
          <img
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
