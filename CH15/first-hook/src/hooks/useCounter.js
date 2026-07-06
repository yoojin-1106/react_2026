import { useState } from "react";

function useCounter(initalValue = 0){

    const [count, setCount] = useState(initalValue);

    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => prev - 1);
    const reset = () => setCount(initalValue);


    
    return {count, increase, decrease, reset};

}

export default useCounter;