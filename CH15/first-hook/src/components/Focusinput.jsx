import { useRef } from "react";

function Focusinput(){

    const inputRef = useRef(null); // dom 객체 <input type="text" />
    const clickCount = useRef(0); // 버튼을 클릭한 횟수 

    const handleFocus = () => {
        inputRef.current.focus();
        clickCount.current = clickCount + 1;
        /* 
            inputRef.current == <input type="text" />
            input type="text"에 focus 함수 기본 제공
            focus 커서 입력칸에 기다림
            clickCount객체는 current 가 숫자로 지정
        */ 

        console.log(`클릭 횟수 : ${clickCount.current}`);
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="버튼을 누르면 여기로 커서 이동"/>

           <div className="button-row">
                <button onClick={handleFocus}>입력칸에 커서 올리기</button>
            </div>

            <p className="hint">
                버튼을 몇번을 눌렀는지 콘솔에 찍힘
            </p>
        </div>
    )
}

export default Focusinput;