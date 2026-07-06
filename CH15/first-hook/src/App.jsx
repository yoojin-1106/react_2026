import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToggleBox from './components/ToggleBox'
import CounterBox from './components/CounterBox'
import Focusinput from './components/Focusinput'

function App() {
  

  return (
    <>
      <div className='app'>
          <h1>15장 커스텀 훅</h1>
          <section className='section'>
              <h2>커스텀 훅</h2>
              <ToggleBox/>
          </section>
          
          <section className='section'>
              <h2>커스텀 훅</h2>
              <CounterBox/>
          </section>
          
          <section className='section'>
              <h2>커스텀 훅</h2>
              <Focusinput/>
          </section>
      </div>
    </>
  )
}

export default App


/* 
  useState : 상태를 컴포넌트로 연결한다. 화면에서 보여줄 변화하는 값을 기억, 바뀌면 다시 그려줌.
  useEffect : API호출 할때, 타이머 등등 화면 랜더링과 관련 없는 일을 처리
  hook : function을 활용 use 커스텀 훅(hook) 

*/