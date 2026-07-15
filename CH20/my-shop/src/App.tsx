import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './pages/Cart'

function App() {

  return (

    <CartProvider>
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Route>
      </Routes>

    </CartProvider>

  )
}

export default App

// CartProvider -> 하위 Routes 에 영향력