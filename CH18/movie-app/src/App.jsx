import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Favorites  from './pages/Favorites'
import MovieDetail from './pages/MovieDetail'

function App() {
 
  return (
      <div>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/movie/:id' element={<MovieDetail/>}/>
          </Routes>
      </div>
  )
}

export default App
