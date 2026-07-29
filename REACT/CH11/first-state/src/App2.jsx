import Counter from './components/counter'
import Password from './components/Password';
import Toggle from './components/Toggle';
import TextCounter from './components/TextCounter';
import Even from './components/Even';
import StepCounter from './components/StepCounter';
import DoubleCounter from './components/DoubleCounter';
import ToDoList from './components/ToDoList';

function App(){
    return(
       <>
            <div className='app'>
                <h1>11장 - useState 공부하기</h1>
                <section className='section'>
                    <h2>카운터 컴포넌트</h2>
                    <Counter/>
                </section>

                <section className='section'>
                    <h2>패스워드 보이기/숨기기</h2>
                    <Password/>
                </section>

                <section className='section'>
                    <h2>좋아요 바꾸기</h2>
                    <Toggle/>
                </section>

                <section className='section'>
                    <h2>글자길이체크</h2>
                    <TextCounter/>
                </section>

                <section className='section'>
                    <h2>카운터 컴포넌트2</h2>
                    <StepCounter/>
                </section>

                <section className='section'>
                    <h2>짝수 홀수 체크</h2>
                    <Even/>
                </section>

                <section className='section'>
                    <h2>X2</h2>
                    <DoubleCounter/>
                </section>

                <section className='section'>
                    <h2>ToDoList</h2>
                    <ToDoList/>
                </section>
            </div>
       </> 
    )
}

export default App;