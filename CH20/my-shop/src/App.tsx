import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
