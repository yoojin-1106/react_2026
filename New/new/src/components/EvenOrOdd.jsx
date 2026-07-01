import { useState } from "react";

function EvenOrOdd(){

    const [num, setNum] = useState(0);
    const [text, setText] = useState("");

/*     const handleEvenOrOdd = (e) =>{
        const newNum = e.target.value;
        console.log(newNum);
        
        if(newNum % 2 === 0){
            setText("짝수");
        }else{
           setText("홀수"); 
        }
        setNum(newNum);
    } */
   
    function handleEvenOrOdd(e){
        const newNum = e.target.value;
        console.log(newNum);
        
        if(newNum % 2 === 0){
            setText("짝수");
        }else{
           setText("홀수"); 
        }
        setNum(newNum);
    }

    return(
        <>
            <div> 
                <input type="text" onChange={handleEvenOrOdd} placeholder="숫자를 입력하세요." value={num}/>
                <p>{text} 입니다.</p>
            </div>
        </>
    )
}

export default EvenOrOdd;