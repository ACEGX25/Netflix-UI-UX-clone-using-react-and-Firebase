import React from 'react'
import Home from './pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logins' element={<Login/>}/>
        <Route path= '/Player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
