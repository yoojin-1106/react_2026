import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
 const [num, setNum] = useState(0);
//num 값, setNum는 함수
/* 
   {num의 값을 변경시켜주고나서 }
   const [현재값, 값을 바꾸는 함수] = useState(0) -> 0:초기값
   useState 숫자 문자 다 가능
*/

 let count = 0;

 function add(){
    count = count + 1;
 }

function addNum(){
  const newNum = num + 1;
  //console.log(newNum);
  setNum(newNum);
}

function minusNum(){
  setNum(num - 1);
}

function initNum(){
  setNum(0);
}


 const [name, setName] = useState("");
 let countName = 0;

 function hiname(){
    setName(`안녕 ${name}`);
 }

  return (
    <>
      <section className='section'>
          <div className='greeting'>
            <h3>일반변수 증가 되나요?</h3>
            <p>일반변수는 <strong>{count}</strong></p>
            <button onClick={add}> + 1 버튼</button>
          </div>

          <div className='greeting'>
            <h3>useState 사용 변수 증가</h3>
            <p>useState 현재값 : <strong>{num}</strong></p>
           
            <button className='skill-badge' onClick={addNum}> + 1 버튼</button>
            <button className='skill-badge' onClick={minusNum}> - 1 버튼</button>
            <button className='skill-badge' onClick={initNum}> 0 버튼</button>
          </div>

          <div className='greeting'>
            <h3>useState 사용 변수 증가</h3>
            <p><strong>{name}</strong>ㅇㅇㅇ아</p>
           
            <button className='skill-badge' onClick={hiname}> 안녕 </button>
          </div>


      </section>
    </>
  )
}

export default App
