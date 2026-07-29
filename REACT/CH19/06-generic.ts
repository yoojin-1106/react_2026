//인자로 받은 items 배열에서 첫번째 인자만 반환 
// T는 type을 정의 해 준다
function first<T>(items: T[]) : T {
    return items[0];
}

const names : string[] = ['수진', '민준', '지우'];
const prices : number[] = [10000, 20000, 30000];

const a = first<string>(names); 
const b = first<number>(prices); 

console.log(a);
console.log(b);

/* 
    function firstString(items : string[]{})
    function firstNumber(items : Number[]{})
    이렇게 함수별로 타입을 정의 해 줘야하는데 그것을 방지하고자 
    generic function first<T>(items: T[]) : T {}
    을 사용하여 타입을 던지면 그 타입별로 해당 배열을 호출해 사용 할 수 있다. 
    -> 각 배열의 인자들마다 타입이 다르기 때문이다. generic은 함수에서만 쓸수 있다.
    자료형을 정의
     any는 지양. 타입스크립트의 본질을 흐림.
     예시 ) 
     function first(items: any[])  {
        return items[0];
    } -> (X)
 */

function box<T>(value : T) : {value : T}{
    return {value}
}

console.log(box<number>(12000));
console.log(box("핸드폰"));

