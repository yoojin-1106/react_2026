import { useState } from "react";

function StepCounter(){

    const [step, setStep] = useState(0);

    function handleStepCounter(){
        setStep(step+2);
    }

    function handleStepCounter2(){
        setStep(step-2);
    }

    function handleStepCounter3(){
        setStep(0);
    }
    

    return(
        <>
             <div className="demo">
                <div className="button-row">
                    <p>{step}</p>
                    <button onClick={handleStepCounter}>+2</button>
                    <button onClick={handleStepCounter3}>0</button>
                    <button onClick={handleStepCounter2}>-2</button>
                </div>
            </div>          
        </>
    )
}

export default StepCounter;