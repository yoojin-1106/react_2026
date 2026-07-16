import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'
import Login from './pages/Login'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (

    <AuthProvider>

      <CartProvider>
        
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
            <Route path='/orders' element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
            <Route path='/orders/:id' element={<ProtectedRoute><OrderDetail/></ProtectedRoute>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>

      </CartProvider>

    </AuthProvider>

  )
}

export default App

// CartProvider -> 하위 Routes 에 영향력