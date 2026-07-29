import { useState } from "react";

function Even(){

    const [num, setNum] = useState(0);
    const [text, setText] = useState("");

    function handleEven(e){
        const evenNum = e.target.value;

        console.log(evenNum);
        if(evenNum === 0){
            setText("0");
        }else if(evenNum % 2 === 0  ){
            setText("짝수");
        }else{
            setText("홀수");
        }
        setNum(evenNum);
    }

    return(
        <>
            <div className="demo">
                <div className="button-row">
                    <input type="text" value={num} onChange={handleEven} placeholder="아무숫자나 입력해보세요."/>
                    <span className="hint">{text}입니다.</span>
                </div>
            </div>        
        </>
    )
}

export default Even;