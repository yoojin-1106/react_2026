import { useState } from "react";

function Calculator(){
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [output, setOutput] = useState(0);
    const [text, setText] = useState("");

    function handleNum1(e){
        setInput1(e.target.value);
    }

    function handleNum2(e){
        setInput2(e.target.value);
    }

    function handleText(e){
        setText(e.target.value);
    }

    function handleOutput(e){
        
        console.log(e);
        const newText = e;
        const num1 = Number(input1);
        const num2 = Number(input2);
        let rst = 0;
        
        
        if(e === "p"){
            rst = num1 + num2;
            setText("+");
            setOutput(rst);
        }else if(e === "m"){
            rst = num1 - num2;
            setText("-");
            setOutput(rst);
         
        }else if(e === "i"){
            rst = num1 * num2;
            setText("X");
            setOutput(rst);
         
        }else if(e === "d"){
            rst = num1 / num2;
            setText("/");
            setOutput(rst);
        }
    }


    return(
        <>
            <div>
                <div className="button-row">
                    <input type="text" onChange={handleNum1} value={input1} placeholder=""/>
                    <span>{text}</span>
                    <input type="text" onChange={handleNum2} value={input2} placeholder=""/>
                    <span>=</span>
                    <input type="text" value={output} readOnly/>
                </div>
                <div className="button-row">
                    <button type="button" onClick={() => handleOutput("p")}>+</button>
                    <button type="button" onClick={() => handleOutput("m")}>-</button>
                    <button type="button" onClick={() => handleOutput("i")}>X</button>
                    <button type="button" onClick={() => handleOutput("d")}>/</button> 
                </div>
            </div>
        </>
    )
}

export default Calculator;