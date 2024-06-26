import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroPlayer from './pages/Player/HeroPlayer'

const App = () => {
  const navi = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        navi('/')
      }else{
        console.log("Logged Out")
        navi('/logins')
      }
    })
  },[])
  return (
    <div>
         <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logins' element={<Login/>}/>
        <Route path= '/Player/:id' element={<Player/>}/>
        <Route path='/HeroPlayer' element={<HeroPlayer/>}/>
      </Routes>
    </div>
  )
}

export default App
