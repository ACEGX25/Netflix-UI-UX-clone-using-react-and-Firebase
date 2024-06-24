import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import tms from '../../assets/cards/TMD';

const Herodkou = ({title,category}) => {

  const cardsRef = useRef();
const handelwheels= (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{cardsRef.current.addEventListener('wheel',handelwheels)})

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cardlist" ref={cardsRef}>
        {tms.map((card,index )=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" srcset="" />
            <p>
              {card.name}
            </p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Herodkou
