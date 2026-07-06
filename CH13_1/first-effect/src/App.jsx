import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList'
import PostList from './components/PostList'

function App() {
  
  return (
    <>
      <div className='app'>

        <h1>useEffect - 데이터 가지고 오기 (외부)</h1>
        <section className='section'>
          <h2>사용자 목록</h2>
          <UserList/>
        </section>

        <h1>useEffect - 데이터 가지고 오기 (외부)</h1>
        <section className='section'>
          <h2>목록</h2>
          <PostList/>
        </section>

      </div>
    </>
  )
}

export default App
