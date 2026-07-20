import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Checkout from './pages/Checkout'


function App() {

  return (
      <AuthProvider>

        <CartProvider>

          <Routes>
            <Route element={<Layout/>}>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/checkout' element={<Checkout/>}/>
             <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>

        </CartProvider>

      </AuthProvider>
  )
}

export default App
