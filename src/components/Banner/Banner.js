import React from 'react'
import './Banner.css'
import play_icon from'../../assets/play_icon.png'
import info_icon from'../../assets/info_icon.png'
function Banner() {
  return (
    <div className='banner'>
        
        <div className="content">
            <h2 className="title">Movie Title</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa libero reprehenderit id veritatis in?</p>
            <div className="banner-button">
                <button className="btn">
                    <img src={play_icon} alt="" className="play" />
                    Play
                </button>
                <button className="btn btn-dark">
                    <img src={info_icon} alt="" />
                    More Info</button>
            </div>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner