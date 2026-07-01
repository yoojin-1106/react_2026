import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Fruits from './components/Fruits'
import ToDoApp from './components/ToDoApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <section>
              <Fruits/>
          </section>
      </div>
      <div>
          <section>
              <ToDoApp/>
          </section>
      </div>
    </>
  )
}

export default App
