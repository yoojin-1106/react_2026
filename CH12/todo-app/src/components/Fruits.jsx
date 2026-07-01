import { useState } from "react";

function Fruits(){

    const fruits = ["사과", "포도", "귤", "수박", "바나나", "복숭아", "딸기"];
    return(
        <>
            <ul>
             {
                fruits.map((f) => 
                  <li key={f}>{f}</li>      
                )
             }
            </ul>
        </>
    )
}

export default Fruits;