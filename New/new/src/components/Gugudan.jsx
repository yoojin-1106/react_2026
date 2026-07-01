import { useState } from "react";

function Gugudan(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function chgNum1 (e){
        setNum1(e.target.value);
    }

    function chgNum2 (e){
        setNum2(e.target.value);
    }

    function handleResult (){
        const newNum = num1 * num2;
        console.log("newNum", newNum);
        console.log("num1", num1);
       // console.log();
        setResult(newNum);
    }

    return(
        <>
            <div>
                <div className="button-row">
                    <input type="text" value={num1} placeholder="숫자를 입력하세요." onChange={chgNum1}/>
                    <span>x</span>
                    <input type="text" value={num2} placeholder="숫자를 입력하세요." onChange={chgNum2}/>
                    <span> = </span>
                    <input type="text" value={result} readOnly /> 
                    <button type="button" onClick={handleResult}>결과보기</button>
                </div>
            </div>
        </>
    )
}

export default Gugudan;