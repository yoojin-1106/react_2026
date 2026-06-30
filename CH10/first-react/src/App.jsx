import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'
// import와 export 세트
import GoodBye from './components/GoodBye'
import ProfileCard from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)
  const myName = "김유진";
  const role = "취준생";
  const hobbies = ["게임", "독서", "요리", "영화", "넷플릭스"];

  return (
    <>
      <div>
          <h1>10장 first JSX component </h1>
          <p>JSX component </p>
          <div>
              <h3>안녕하세요, 좋은 아침입니다. 제 이름은 {myName} 입니다.</h3>
          </div>
      </div>
      <section className='section'>
          <Greeting name = {myName}/>

          <GoodBye name = {myName}/>
          {/* 부모가 자식에게 전달, props */}

          <ProfileCard name = {myName} role = {role} hobbies = {hobbies}></ProfileCard>
      </section>
    </>
      /* div 한개만  return 할 수 있음 두개면 에러 발생 div 안에 div는 가능함. 하지만 <></> 을 넣으면 두개도 쓸수있다.*/
  )
}

export default App
