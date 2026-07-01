import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrease(){
        setCount(count + 1);
    }

    function handleDecrease(){
        setCount(count - 1);
    }

    function handleReset(){
        setCount(0);
    }

    return(
        <>
            <div className="demo">
                <p className="counter-value">{count}</p>

                <div className="button-row">
                    <button onClick={handleDecrease}>-1</button>
                    <button onClick={handleReset}>0</button>
                    <button onClick={handleIncrease}>+1</button>
                </div>
                <p className="hint">버튼을 누르면 숫자가 바뀌고 화면이 다시 그려집니다.</p>

            </div>
        </>
    )
}

export default Counter;