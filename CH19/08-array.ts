interface Item{
    name : string
    price : number
    qty : number
}

const cart : Item[] = [
      {name : "기계식키보드", price : 50000, qty :2 }
    , {name : "헤드폰" , price : 60000, qty : 5}
    , {name : "샴푸" , price : 20000, qty : 15}
    , {name : "트리트먼트" , price : 30000, qty : 223}
    , {name : "드라이기" , price : 70000, qty : 34}
]

const names : string[] = cart.map((item) => item.name);
console.log(names);

const prices : number[] = cart.map((it) => it.price);
console.log(prices);

const cheap : Item[] = cart.filter((it) => it.price > 20000);
console.log(cheap);

// 문제1) 수량이 11보다 작은 것만 추출
const smallQty : Item[] = cart.filter((it) => it.qty < 11);
console.log(smallQty);

//문제