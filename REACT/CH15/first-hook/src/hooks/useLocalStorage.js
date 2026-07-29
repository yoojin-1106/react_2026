import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(() => {
            const saved = localStorage.getItem(key); //저장된 값을 읽는다

            /* 
                saved 타입은 무조건 문자열
                문자열을 자바스크립트 객체로 변환 : JSON.parse()
            */
           //console.log(saved);
            if(saved === null || saved === "undefined"){
                return initialValue;
            }
            try{

                return saved !== null ? JSON.parse(saved) : initialValue;
            }catch(error){
                console.error(error);
                return initialValue;
            }
        }
    )

    useEffect(() => {
            /* 
                value 자바스크립트 객체
                localStorage에 자바스크립트객체를 그냥 넣을 수는 없음
                JSON.stringify()사용 문자열로 자바스크립트 객체 -> 문자열 (json)

            */
            localStorage.setItem(key, JSON.stringify(value));
        }
    , [key, value])

    return [value, setValue];

}

export default useLocalStorage;