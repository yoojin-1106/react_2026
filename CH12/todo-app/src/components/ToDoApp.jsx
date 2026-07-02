import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoApp(){

    const [todos, setTodos] = useState([
        // crypto.randomUUID : 절대 겹치지 않은 ID를 생성해 줍니다.
          {id : crypto.randomUUID(), text : "useState 복습하기", done : false}
        , {id : crypto.randomUUID(), text : "컴포넌트 만들기 복습하기", done : true}
        , {id : crypto.randomUUID(), text : "키보드 구경하기", done : false}
        , {id : crypto.randomUUID(), text : "물 자주 마시기", done : false}
        , {id : crypto.randomUUID(), text : "핸드폰 하기", done : false}
        , {id : crypto.randomUUID(), text : "게임하기", done : false}
        , {id : crypto.randomUUID(), text : "침대에 눕기", done : false}
    ]);

    const [text, setText] = useState("");

    const handleText = (event) => {
        setText(event.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault(); 
        // form이 onSubmit 할때 화면을 리로딩 하는데 e.prevent.default()를 선언하면 멈춘다.
        if(!text){
            alert("할일을 입력하세요.");
            return;
        }else{
            const newTodo = {
                id : crypto.randomUUID()
                , text : text
                , done : false
            };
            //setTodos((prev) => [...newTodo]);
            setTodos([...todos, newTodo]);
            setText("");
        }

    }

    const handleToggle = (id) => {
        setTodos((prev) => prev.map((todo) => {
            //console.log(id);
            //console.log(todo.id);
            if(todo.id === id){
                console.log("id : ", id, ", todo.id : ", todo.id, ", done: ", todo.done);
            }
           return todo.id === id ? {...todo, done : !todo.done} : todo
        }))
    }

    const handleDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => {
           return todo.id !== id
        }))
    } 

    return(
        <>
            <div className="card">
                <h2>할일 목록</h2>
                <form className="todo-form" onSubmit={handleAdd}>
                    <input type="text" value={text} onChange={handleText} placeholder="할일을 입력하세요"/>
                    <button type="submit">추가</button>
                </form>
                <ul className="todo-list">
                    {
                      todos.map((t) => 
                        <ToDoItem key={t.id} 
                                  todo={t} 
                                  onToggle={handleToggle} 
                                  onDelete={handleDelete}/>
                       )  
                    }

                </ul>

            </div>
        </>
    )
}

export default ToDoApp;