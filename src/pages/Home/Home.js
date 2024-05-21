import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import RowPost from '../../components/RowPost/RowPost'
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Banner/>
        <RowPost/>
    </div>
  )
}

export default Home