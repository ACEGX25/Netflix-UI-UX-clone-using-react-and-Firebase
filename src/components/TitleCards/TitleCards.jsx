import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_Data'

const TitleCards = ({title,category}) => {
const [apiData, setApiData]= useState ([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTNmN2ZiMzRmOTQ5YjYzMDdjMGRmZjhhYjBkYzhkMSIsIm5iZiI6MTcxOTI1OTcyOS42NTUyMzgsInN1YiI6IjY2NzlkMTllOTkyMGVjYWZhYTU3MjhiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pz5E26JbOCpk_K3aXQgFuMtdmbQa0R0nhAo1Aqi5w0o'
    }
  };
  


const handelwheel= (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
  
  cardsRef.current.addEventListener('wheel',handelwheel)})

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cardlist" ref={cardsRef}>
        {apiData.map((card,index )=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" srcset="" />
            <p>
              {card.original_title}
            </p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
