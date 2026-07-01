import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import EvenOrOdd from './components/EvenOrOdd';
import Gugudan from './components/Gugudan';
import Calculator from './components/Calculator';

function App() {

  return (
    <>
      <div>
          <h2>짝수와 홀수</h2>
          <EvenOrOdd/>
      </div>
      <div>
          <h2>구구단</h2>
          <Gugudan/>
      </div>
      <div>
          <h2>계산기</h2>
          <Calculator/>
      </div>
    </>
  )
}

export default App;
