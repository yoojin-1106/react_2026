import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
  

  return (
      <AuthProvider>

        <CartProvider>

          <Routes>
            <Route element={<Layout/>}>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
            </Route>
          </Routes>

        </CartProvider>

      </AuthProvider>
  )
}

export default App
