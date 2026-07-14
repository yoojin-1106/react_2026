import { useReducer } from 'react'

// ***************useReducer

type Action = {type : 'inc'} 
                | {type : 'dec'} 
                | {type : 'reset'}

function counterReducer(state : number, action : Action) : number{
        switch(action.type){
            case 'inc' :
                return state + 1;
            case 'dec' :
                return state - 1;
            case 'reset' :
                return state = 0;
        }
}                

function App() {
    const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
        <div className='container'>
            <p>count : {count}</p>
            <button onClick={() => dispatch({type : 'inc'})}>+1</button>
            <button onClick={() => dispatch({type : 'reset'})}>0</button>
            <button onClick={() => dispatch({type : 'dec'})}>-1</button>
        </div>
    </>
  )
}

export default App
