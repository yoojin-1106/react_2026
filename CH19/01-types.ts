//console.log(1);

const name : string = "김유진";
//console.log(name);
// string 타입 지정후 숫자를 넣으면 에러 발생 ex) const name : string = 1111; 에러!

const number : number = 111;
//console.log(number);

const price : number = 35000;
//console.log(price);

const isStock = true;
// isStock 타입 하지 않더라도 스스로 boolean을 인식 한다. 하지만 안전하게 타입을 지정하는 것이 좋다.

const version = 1;

const tagline = "타입쇼핑";
//console.log("tagline :", typeof tagline);
//console.log("isStock :", typeof isStock);
//onsole.log("version :", typeof version);


//연습1) 타입표기 채우기 
const sku : string = 'SKU-001'
const quantity : number = 3
const onSale : boolean = false;

//console.log("sku :", typeof sku, sku);
//console.log("quantity :", typeof quantity, quantity);
//console.log("onSale :", typeof onSale, onSale);

//연습2) 
// shippingFree 에  number 선언, freeShipping은 boolean 선언 false할당
const shippingFree : number = 0;
const freeShipping : boolean = false;

console.log("shippingFree :", typeof shippingFree, shippingFree);
console.log("freeShipping은 :", typeof freeShipping, freeShipping);
// const freeShipping = false; 만 선언해도 추론해서 boolean 타입으로 알아서 배정한다.


