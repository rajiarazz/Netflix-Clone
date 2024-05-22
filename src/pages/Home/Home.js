import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import {action,popular,orginals, topRated,upcoming} from '../../urls'
import Banner from '../../components/Banner/Banner'
import RowPost from '../../components/RowPost/RowPost'
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Banner/>
        <RowPost url={popular} title='Popular' isBannerPost/>
        <div className="row-post-container">
        <RowPost url={orginals} title='Netflix Orginals' isLarge/>
        <RowPost url={topRated} title='Top Rated'/>
        <RowPost url={upcoming} title='Upcoming'/>
        <RowPost url={action} title='Actions'/>
        </div>
        
        
    </div>
  )
}

export default Home