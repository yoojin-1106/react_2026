import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

/* http://www.github/mhb8436/my-react2026 */

/* 데이터 작업 영역 */
let todos = [];
let nextId = 1;

/*
  할일 아이템 : {id:number, text:String, done:boolean} 
*/
function addTodo(text){
  const todo = {id : nextId
            , text : text
            , done : false};
  nextId = nextId + 1;
  todos = [...todos, todo];
  // return todos;
};

/* 할일 완료 함수 */
function toggleToDo(id){
  todos = todos.map((todo) => todo.id === id ? {...todo, done : !todo.done} : todo );
};

/* 할일 삭제 함수 */
function removeToDo(id){
  todos = todos.filter((todo) => todo.id !== id);
};

/* 할일 목록 불러오기 함수 */
function getTodos(){
  return [...todos];
};

/* 할일 false count 함수 */
function reminingTodos(){
  const remain = todos.filter((todo) => todo.done === false);
  return remain.length;
};


/* 화면 작업 영역 */
const app = document.querySelector("#app");
const hello = document.createElement("p");

hello.textContent = "환영합니다.";
app.appendChild(hello);

const toDoSection = document.createElement("section");
app.appendChild(toDoSection);

toDoSection.innerHTML = `
  <h3>To Do List</h3>
  <p>To Do 예제</p>
  <div>
    <input type="text" id="toDoInput" placeholder="예: 듀어링고 말하기 10분" title="할일을 입력하세요."/>
    <button type="button" id="addBtn">추가</button>
  </div>

  <p id="remining"></p>
  <ul id="toDoList"></ul>
`;
 

const input = toDoSection.querySelector("#toDoInput");
const addBtn = toDoSection.querySelector("#addBtn");
const remining = toDoSection.querySelector("#remining");
const toDoList = toDoSection.querySelector("#toDoList");

 addBtn.addEventListener("click", () => {
    addTodo(input.value);
    input.value = "";
    input.focus();
    refresh();
}); 

/* 랜더링 */
function render(todos, remining){
  toDoSection.querySelector("#remining").textContent = `남은 할일 개수는 ${remining} 개`;

  toDoList.innerHTML = ""; // 
  todos.forEach((todo) => {
    const li = document.createElement("li");      
    const textSpan = document.createElement("span");
    
    textSpan.textContent = todo.text;
    textSpan.style.textDecoration = todo.done ? "line-through" : "none";

    textSpan.addEventListener("click", () => {
        toggleToDo(todo.id);
        refresh();
      });
  
      const delBtn = document.createElement("buuton");
      delBtn.textContent = "삭제";
      delBtn.style.marginLeft = "8px";
      delBtn.addEventListener("click", () => {
        removeToDo(todo.id);
        refresh();
      });

    li.append(textSpan, delBtn);
    toDoList.appendChild(li);
  });
};


function refresh(){
  render(getTodos(), reminingTodos());
};

refresh();
//document.querySelector('#app').innerHTML = ``

//setupCounter(document.querySelector('#counter'))



/* <section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${javascriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section> */
