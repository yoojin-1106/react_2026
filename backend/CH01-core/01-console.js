// ---출력명령어 -> C:\Users\user\Documents\GitHub\react_2026\backend\CH01-core>node 01-console.js --- //
// ------console기본------------------------------------- //
//console.log("log");
//globalThis.console.log(2222); 
// 글로벌(global)이 nodejs에서 사용하는 것이고, window를 뜻한다. 이후 확장하여 nodejs 환경이 아니더라도 사용할 수 있는것이 바로 globalThis이다.
//console.error("error");
//console.info("info");
//console.debug("debug");
//console.warn("warn");


// ------문자열------------------------------------- //
const person = {name : '홍길동', age : 18, heiht : 180.5};
// ----s:String, d:Decimal, f:Float, o:Object --------------------------------------- //
//console.log('이름은 %s, 나이는 %d, 키는 %f, 원본은 %o ', person.name, person.age, person.heiht, person);


// -----구조화-------------------------------------- //
//console.table([person, {...person, name:'김철수', age:20}]);
// ----- ┌─────────┬──────────┬─────┬───────┐ ------------ //
// ----- │ (index) │ name     │ age │ heiht │ ------------ //
// ----- ├─────────┼──────────┼─────┼───────┤ ------------ //
// ----- │ 0       │ '홍길동'  │ 18  │ 180.5 │ ------------ //
// ----- │ 1       │ '김철수'  │ 20  │ 180.5 │ ------------ //
// ----- └─────────┴──────────┴─────┴───────┘ 이렇게 테이블로 출력된다.------------ //
//console.dir(person, {depth:null, color:true});
//옵션을 추가 할 수 있다.
//console.dir(console, {depth:null, color:true});
// -----Object [console] {
// -----  log: [Function: log],
// -----  info: [Function: info],
// -----  debug: [Function: debug],
// -----  warn: [Function: warn],
// -----  error: [Function: error],
// -----  dir: [Function: dir],
// -----  time: [Function: time],
// -----  timeEnd: [Function: timeEnd],
// -----  timeLog: [Function: timeLog],
// -----  trace: [Function: trace],
// -----  assert: [Function: assert],
// -----  clear: [Function: clear],
// -----  count: [Function: count],
// -----  countReset: [Function: countReset],
// -----  group: [Function: group],
// -----  groupEnd: [Function: groupEnd],
// -----  table: [Function: table],
// -----  dirxml: [Function: dirxml],
// -----  groupCollapsed: [Function: groupCollapsed],
// -----  Console: [Function: Console],
// -----  profile: [Function: profile],
// -----  profileEnd: [Function: profileEnd],
// -----  timeStamp: [Function: timeStamp],
// -----  context: [Function: context],
// ----- createTask: [Function: createTask]
 // 프로토타입을 조회해볼 수 있다.


// -----실행시간 출력-------------------------------------- //
//console.time();
//console.timeEnd();
// 옵션이 없으면 default 로 출력이 된다. 성능 최적화를 할 때 사용된다. .time() ~ .timeEnd() 을 측정한다.(둘이 짝궁)
//console.time();
let sum = 0;
for(let i=0; i<10000; i++){
    sum += i
}
//console.timeEnd();
// default: 0.258ms이 출력되어 for문이 걸리는 시간을 측정한다. -> label을 추가 하지 않아서 default로 출력한다.

//console.time('작업1');
let sum1 = 0;
for(let i=0; i<10000; i++){
    sum1 += i
}
//console.timeEnd('작업1');
// 작업1: 0.223ms 이 출력.


// -----그룹 / 카운트 / 스택-------------------------------------- //
//console.group();
//console.groupEnd();
//그룹
//console.count();
//카운트
//console.assert();
//스택 -> 조건이 거짓(false)일 때만 출력한다.
console.assert(sum > 0, '조건이 거짓(false)일 때만 출력'); // 출력안됨
console.assert(sum < 0, '조건이 거짓(false)일 때만 출력'); // 출력됨



// -------------------------------------------------- //

