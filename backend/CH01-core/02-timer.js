// --------------------------------------------------------------------- //
setTimeout(() => {console.log('1초 후 실행')}, 1000);
// 1000: 1초
// setTimeout 안에는 ,로 구분되는 두개의 매개변수가 있다. () => {console.log('1초 후 실행')}, 1000
//첫번째 매개변수 : () => {console.log('1초 후 실행')}
//두번째 매개변수 : 1000
//첫번째 매개변수는 콜백이다.(callback), 비동기식. 

const timeout1 = setTimeout(() => {console.log('1.5초 후 실행')}, 1500);
//로 const timeout1 변수로 지정하면 취소할 수도 있다.
const timeout2 = setTimeout(() => {console.log('3초 후 실행')}, 3000);

const timeinterval = setInterval(() => {
  console.log('1초마다 실행'); 
}, 1000);

setTimeout(() => {
    clearTimeout(timeout1); // 2.5초 후에 해당 timeout1를 취소한다. 다만 timeout1이 1.5초 후 실행이 되어버렸기 때문에 크게 의미는 없다.
    clearTimeout(timeout2); // 2.5초 후에 해당 timeout2를 취소한다. 
    clearInterval(timeinterval); // 1초마다 실행하다가2.5초 이후 멈춘다. (2회실행)
    console.log('마지막');
}, 2500);


const timeout3 = setTimeout(() => {console.log('0초 후 실행')}, 0);

setImmediate(() => console.log('즉시 실행 setImmediate'));
// ------ 동기식, 가장먼저 실행된다. ------ //

// --------------------------------------------- //
// ------ 즉시 실행 setImmediate ------ //
// ------ 1초 후 실행 ------ //
// ------ 1초마다 실행 ------ //
// ------ 1.5초 후 실행 ------ //
// ------ 1초마다 실행 ------ //

// --------------------------------------------------------------------- //