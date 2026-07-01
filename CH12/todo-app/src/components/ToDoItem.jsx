import { useState } from "react";

function ToDoItem({todo, onToggle, onDelete}){
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
                <button className="danger" onClick={() => onDelete(todo.id)}>삭제</button>
            </li>
        </>
    )
}

export default ToDoItem;