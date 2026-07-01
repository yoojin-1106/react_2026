import { useState } from "react";

function DoubleCounter(){

    const [doubleNum, setDoubleNum] = useState(1);

    function handleDoubleCounter(){
        setDoubleNum(doubleNum*2);
    }


    return(
        <>
             <div className="demo">
                <div className="button-row">
                    <p>{doubleNum}</p>
                    <div className="button-row">

                        <button onClick={handleDoubleCounter}>X 2</button>
                    </div>
                </div>
            </div>       
        </>
    )
}

export default DoubleCounter;