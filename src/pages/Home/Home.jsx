import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_babba from '../../assets/hero_babba.png'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_babba} alt="" className='banner' />
        <div className="herocap">
        <img src={hero_title} alt="" className='captioni' />
        <p>
        When a young boy vanishes, a small town uncovers a mystery involving secret 
        experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="herob">
            <button className='btn'><img src={play_icon} alt=""  />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=""  />More info</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
