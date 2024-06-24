import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_babba from '../../assets/hero_babba.png'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
// import Herodkou from '../../components/TitleCards/herodkou'
import Footer from '../../components/Footer/Footer'

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
        <TitleCards/>
        </div>
      </div>
      <div className="morecards">
      <TitleCards title={"Since You Watched Animal"}/>
      <TitleCards title={"Only On Netflix"}/>
      {/* <Herodkou title={"Trupti's Picks"}/> */}
      <TitleCards title={"Critically Acclaimed TV shows"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
