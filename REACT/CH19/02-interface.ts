/* interface : 객체의 모양을 정의 */
interface Product{
    id : string
    name : string
    price : number
    isStoke : boolean
}

// Poduct 를 쓰려면 interface Poduct의 형태를 따라야 한다.
const keyboad : Product = {
      id : "keykron3"
    , name : "키크론K3 PRO"
    , price : 198000
    , isStoke : true
}

// 문제1 각자 원하는 제품 변수를 정한다.
const coffee : Product = {
      id : "illy-001"
    , name : "일리캡슐"
    , price : 900
    , isStoke : false
}

//console.log(coffee);

// 문제1 각자 원하는 제품 변수를 정한다.
const Products : Product[] = [
    keyboad 
  , coffee 
  , {id : "앱코", name : "A87K", price : 100000, isStoke : true}   
]

for(const p of Products){
    // p는 Poduct로(Poduct[]) 추론 할 수 있다.
    console.log(p.name);
}


// 연습1) review interface정의 poductId string, rating number, comment string
interface review{
    productId : string
    rating : number
    comment : string
 } 

 // 연습2) review1 
 const review1 : review ={    
      productId : "pr-01"
    , rating : 10
    , comment : "comment2222"
}

//console.log(review1)

// 연습3) address interface정의 recipient string, phone string, zipCode number, detail string
interface address{
    recipient : string
    phone : string
    zipCode : number
    detail : string
}

const home : address ={
     recipient : "home"
   , phone : "+82 10-2222-9999"
   , zipCode : 486123
   , detail : "hoyi"
}

console.log(home)