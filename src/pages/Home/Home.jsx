import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_babba3 from '../../assets/hero_babba3.jpg';
import hero_title2 from '../../assets/hero_title2.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Herodkou from '../../components/TitleCards/herodkou';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/heroplayer');
    };

    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero_babba3} alt="" className='banner' />
                <div className="herocap">
                    <img src={hero_title2} alt="" className='captioni' />
                    <p>
                        Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster,
                        baptized in the horrific power of the atomic bomb
                    </p>
                    <div className="herob">
                        <button className='btn' onClick={handlePlayClick}><img src={play_icon} alt="Play" />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="More info" />More info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="morecards">
                <TitleCards title={"Since You Watched Animal"} category={"popular"} />
                <TitleCards title={"Only On Netflix"} category={"upcoming"} />
                <Herodkou title={"Trupti's Picks"} />
                <TitleCards title={"Critically Acclaimed TV shows"} category={"top_rated"} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
