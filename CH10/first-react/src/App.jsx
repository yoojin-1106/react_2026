import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'
// import와 export 세트
import GoodBye from './components/GoodBye'
import ProfileCard from './components/ProfileCard'
import ProjectCard from './components/ProjectCard'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)
  const myName = "김유진";
  const role = "취준생";
  const hobbies = ["게임", "독서", "요리", "영화", "넷플릭스"];
  const skills = ["자바", "자바스크립트", "리액트", "오라클", "제이쿼리"];
  const projectCardName = "To Do 앱";
  const projectCardDesc = "할일 관리 미니 프로젝트";
  const toDos = ["게임", "독서", "공부"];
  const projectCardList={
      name : projectCardName
    , desc : projectCardDesc
    , toDos : toDos
  };

 const movieList = {
      title : "인터스텔라"
      , key : 1
      , year : 2026
      , star : 4.5
      , genre : ["드라마", "SF"]
 } 

  return (
    <>
      <div>
          <h1>10장 JSX component </h1>
           {/* <p>JSX component </p> */}
          <div>
              <h3>안녕하세요, 좋은 아침입니다. 제 이름은 {myName} 입니다.</h3>
          </div>
        
        <section className='section'>
            <Greeting name = {myName}/>

            <GoodBye name = {myName}/>
            {/* 부모가 자식에게 전달, props */}

            <ProfileCard name={myName} role={role} hobbies={hobbies} skills={skills}></ProfileCard>
        
            <ProjectCard projectCardList={projectCardList}></ProjectCard>

            <MovieCard movieList={movieList}></MovieCard>
        </section> 


      </div>



    </>
      /* div 한개만  return 할 수 있음 두개면 에러 발생 div 안에 div는 가능함. 하지만 <></> 을 넣으면 두개도 쓸수있다.*/
  )
}

export default App
