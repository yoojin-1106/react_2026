import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PostApp from './component/PostApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>나의 게시판</h1>
          <p className='subtitle'>글을 추가하고, 목록에서 수정, 삭제 해봅니다.</p>
          <PostApp/>
      </div>     
    </>
  )
}

export default App
