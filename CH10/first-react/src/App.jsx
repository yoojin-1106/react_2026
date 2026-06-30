import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'
// import와 export 세트

function App() {
  const [count, setCount] = useState(0)
  const myName = "김유진";

  return (
    <>
      <div>
          <h1>10장 first JSX component </h1>
          <p>JSX component </p>
          <div>
              <h2>안녕하세요, 좋은 아침입니다. 제 이름은 {myName} 입니다.</h2>
          </div>
      </div>
      <section>
          <Greeting name = {myName}/>
      </section>
    </>
      /* div 한개만  return 할 수 있음 두개면 에러 발생 div 안에 div는 가능함. 하지만 <></> 을 넣으면 두개도 쓸수있다.*/
  )
}

export default App
