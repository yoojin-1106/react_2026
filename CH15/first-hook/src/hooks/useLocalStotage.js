import { useState, useEffect } from "react";

function useLocalStotage(key, initalValue){

    const [value, setValue] = useState(
        () => {
            const saved = localStorage.getItem(key); //저장된 값을 읽는다

            /* 
                saved 타입은 무조건 문자열
                문자열을 자바스크립트 객체로 변환 : JSON.parse()
            */

            return saved !== null ? JSON.parse(saved) : initalValuel;
        }
    )

    useEffect(
        () => {
            /* 
                value 자바스크립트 객체
                localStorage에 자바스크립트객체를 그냥 넣을 수는 없음
                JSON.stringify()사용 문자열로 자바스크립트 객체 -> 문자영 (json)

            */
            localStorage.setItem(key, JSON.stringify(value));
        }
    , [key, value])

}

export default useLocalStotage;