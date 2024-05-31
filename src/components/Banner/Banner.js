import React, { useEffect, useState } from "react";
import { API_KEY,imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[3])
      });
  }, []);

  return (
    <div style={{backgroundImage:  `url(${movie? imageUrl + movie.backdrop_path:''})`}} className="banner">
      <div className="content">
        <h2 className="title">{movie ? movie.title : ''}</h2>
        <p className="description">
        {movie ? movie.overview : ''}
        </p>
        <div className="banner-button">
          <button className="btn">
            <img src={play_icon} alt="" className="play" />
            Play
          </button>
          <button className="btn btn-dark">
            <img src={info_icon} alt="" />
            More Info
          </button>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
