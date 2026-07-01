import { useState } from "react";

function ToDoItem({todo, onToggle}){
    // ToDoApp 이 부모jsx
    /* 
        onToggle에 handleToggle함수를 전달
    */

    //console.log(onToggle);

    return( 
        <>
            <li className="todo-item">
                <input type="checkbox" checked={todo.done} onChange={()=>onToggle(todo.id)} />
                <span className={`text ${todo.done ? 'done' : ''}`}>
                    {todo.text}
                </span>
            </li>
        </>
    )
}

export default ToDoItem;