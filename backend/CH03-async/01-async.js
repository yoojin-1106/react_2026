function asyncTest(name, callback){
    console.log('타이머시작');
    setTimeout(() => {
        callback(name);
        //string이 넘어올것 같다. callback이라는 함수 실행.
    }, 1000);
    //setTimeout을 [void void type]이라고 한다.
}
    

function doSomething(){
    for(let i = 0; i < 100; i++){
        console.log(`${i}번째 처리`);
    }
}

asyncTest('BTS', (name) => console.log(`Hello, ${name}`));
asyncTest('BLK', console.log);
doSomething();