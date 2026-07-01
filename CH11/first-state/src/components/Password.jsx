import { useState } from "react";

function Password(){

    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show);
    }

    return(
        <>
            <div className="demo">
                <div className="button-row">
                    <div>
                        <input type={show ? "text" : "password" } placeholder="비밀번호" />
                    </div>

                    <button onClick={handleShow}>{show ? "숨기기" : "보기"}</button>
                </div>
            </div>
        </>
    )
}

export default Password;