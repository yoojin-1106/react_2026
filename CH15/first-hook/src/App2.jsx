import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import UserGreeting from './components/UserGreeting'
import UserHeader from './components/UserHeader'
import { UserProvider, useUser } from './context/UserContext'
import { GreetingProvider, useGreeting } from './context/GreetingContext'
import GreetingForm from './components/GreetingForm'
import GreetingCard from './components/GreetingCard'

function Layout() {
  
  const {isDark} = useTheme();
 //console.log(222, isDark);


  return (
    <>
      <div className={`app ${isDark ? "dark" : "light"}`}>
          <h1>context - props 사용안하고 다크모드 켜기</h1>
          <section className='section'>
            <ThemeToggleButton />
          </section>
          <section className='section'>
              <h1>떨어진 두개의 컴포넌트에서 이름을 공유합니다.</h1>
              <UserHeader />
              <div className='gap'>
                <UserGreeting />
              </div>
          </section>
          <section className='section'>
              <h3>Greeting</h3>
              <GreetingForm />
              <div className='gap'>
                <GreetingCard />
              </div>
          </section>
      </div>
    </>
  )
}

function App2() {
  // console.log(333);
  /* 
    여러 Provider를 감쌀 수 있다.
        <ThemeProvider>
      <UserProvider>
        <Layout/>
      </UserProvider>
    </ThemeProvider>
    도 가능하다.
   */
  return (
    <UserProvider>
      <ThemeProvider>
      <GreetingProvider>
        <Layout/>
      </GreetingProvider>
      </ThemeProvider>
    </UserProvider>
    )
}

export default App2


/* 
  useState : 상태를 컴포넌트로 연결한다. 화면에서 보여줄 변화하는 값을 기억, 바뀌면 다시 그려줌.
  useEffect : API호출 할때, 타이머 등등 화면 랜더링과 관련 없는 일을 처리
  hook : function을 활용 use 커스텀 훅(hook) 

*/