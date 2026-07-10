/* interface : 객체의 모양을 정의 */
interface Poduct{
    id : string
    name : string
    price : number
    isStoke : boolean
}

// Poduct 를 쓰려면 interface Poduct의 형태를 따라야 한다.
const keyboad : Poduct = {
      id : "keykron3"
    , name : "키크론K3 PRO"
    , price : 198000
    , isStoke : true
}

// 문제1 각자 원하는 제품 변수를 정한다.
const coffee : Poduct = {
      id : "illy-001"
    , name : "일리캡슐"
    , price : 900
    , isStoke : false
}

//console.log(coffee);

// 문제1 각자 원하는 제품 변수를 정한다.
const Poducts : Poduct[] = [
    keyboad 
  , coffee 
  , {id : "앱코", name : "A87K", price : 100000, isStoke : true}   
]

for(const p of Poducts){
    // p는 Poduct로(Poduct[]) 추론 할 수 있다.
    console.log(p.name);
}