console.log(1);

const name : string = "김유진";
console.log(name);
// string 타입 지정후 숫자를 넣으면 에러 발생 ex) const name : string = 1111; 에러!

const number : number = 111;
console.log(number);

const price : number = 35000;
console.log(price);

const isStock = true;
// isStock 타입 하지 않더라도 스스로 boolean을 인식 한다. 하지만 안전하게 타입을 지정하는 것이 좋다.

const version = 1;

const tagline = "타입쇼핑";
console.log("tagline :", typeof tagline);
console.log("isStock :", typeof isStock);
console.log("version :", typeof version);