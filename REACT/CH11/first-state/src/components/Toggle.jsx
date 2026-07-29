import { useState } from "react";

function Toggle(){

    const [like, setLike] = useState(false);

    function hadleLike(){
        setLike(!like);
    }

    return(
        <>
            <div className="demo">
                <div className="button-row">
                    <button onClick={hadleLike} className="like-button" >{like ? "취소" : "좋아요"}</button>
                    <p className="toggle-status">{like ? "좋아요를 눌렀습니다." : "좋아요를 취소 했습니다."}</p>
                </div>
                {
                    like &&(
                        <div className="secret-box"> 고마워요! 여러분의 5번째 스테이트 박스입니다.</div>
                    )
                }
            </div>
        </>
    )
}

export default Toggle;