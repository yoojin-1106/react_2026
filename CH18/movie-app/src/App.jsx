import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Favorites  from './pages/Favorites'
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
 
  return (
      <FavoritesProvider>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/movie/:id' element={<MovieDetail/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </FavoritesProvider>
  )
}

export default App
