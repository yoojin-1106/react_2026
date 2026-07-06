import useCounter from "../hooks/useCounter";

function CounterBox(){
    const {count, increase, decrease, reset} = useCounter(0);
    /* 
        count : 상태 나머진 함수
        increase, decrease, reset : 함수
    */

    return(
        <div className="demo">
            <p className="counter-value">{count}</p>
            <div className="button-row">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>0</button>
            </div>

            <p className="hint">
                값을 다루는 코드는 useCounter 훅안에 있고, 이 컴포넌트에서는 useState가 단 한 줄도 없습니다.
            </p>
        </div>
    )
}

export default CounterBox;