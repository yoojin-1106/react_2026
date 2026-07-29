import { useState } from "react";

function TextCounter(){

    const [text, setText] = useState("");

    function handleText(e){
        //e : event약자
        //console.log(e); onChange를 가져온다.
        const currentText = e.target.value;
        //console.log(currentText);
        //console.log(currentText.length);
        setText(currentText);
    }

    return(
        <>
            <div className="demo">
                <div className="button-row">
                    <input type="text" value={text} onChange={handleText} placeholder="아무글자나 입력해 보세요."/>
                    <p className="hint">지금 {text.length} 글자</p>
                </div>
            </div>
        </>

    )
}

export default TextCounter;