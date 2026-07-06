import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import Card from './components/Card'

const PRODUCTS = [
    {id : 1, name: '아메리카노', price : 4500}
  , {id : 2, name: '카페라떼', price : 5000}
  , {id : 3, name: '수박주스', price : 6000}
  , {id : 4, name: '딸기케이크', price : 8000}
  , {id : 5, name: '말차라떼', price : 6500}
  , {id : 6, name: '치즈케이크', price : 7500}
];

function App() {

  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    setCart(
      (prevCart) => {
        const found = prevCart.find((item) => item.id === product.id)
        if(found){
          return prevCart.map((item) => item.id === product.id ? {...item, quantity : item.quantity + 1 } : item)
        }
        return [...prevCart, {...product, quantity : 1}];
      })
  }

  const handleRemove = (id) => {
    setCart(
      (prevCart) => prevCart.filter((item) => item.id !== id)
    )
  }

  const handleChange = (id, diff) => {
    setCart(
      (prevCart) => prevCart.map((item) => item.id === id ? {...item, quantity : Math.max(1, item.quantity + diff)} : item )
      /* 
         Math.max(1, item.quantity + diff) -> -1을 아무리 해도 최대값은 1에서 더 떨어지지 않는다.
      */
    )
  }

  const handleToTal = () => {
    setCart(
      (prevCart) => prevCart.map((item) => item.id === id ? {...item, quantity : Math.max(1, item.quantity + diff)} : item )
      /* 
         Math.max(1, item.quantity + diff) -> -1을 아무리 해도 최대값은 1에서 더 떨어지지 않는다.
      */
    )
  }

  return (
    <>
      <h1>카페</h1>
      <Card title="상품목록">
        <ProductList products={PRODUCTS} onAdd={handleAdd}/>
      </Card>
      <Card title="장바구니">
        <CartSummary items={cart}  onRemove={handleRemove} onChage={handleChange} />
      </Card>
    </>
  )
}

export default App
