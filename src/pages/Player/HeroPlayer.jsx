import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.svg';

const HeroPlayer = () => {
    const navigate = useNavigate();

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="back" onClick={() => navigate(-1)} />
            <iframe
                width='90%'
                height='90%'
                src='https://www.youtube.com/embed/nAYKaslCXPc?si=l3dX9_haediWOv0b'
                title='trailer'
                frameBorder='0'
                allowFullScreen
            ></iframe>
            <div className="playerinfo">
                <p>publish</p>
                <p>Name</p>
                <p>Type</p>
            </div>
        </div>
    );
};

export default HeroPlayer;
