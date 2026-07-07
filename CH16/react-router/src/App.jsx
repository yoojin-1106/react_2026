import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
        <div className = 'container'>
          <Routes>
            <Route path = '/' element = { <Home/> } ></Route>
            <Route path = '/about' element = { <About/> } ></Route>
            <Route path = '/contact' element = { <Contact/> } ></Route>
          </Routes>
        </div>
    </>
  )
}

export default App
