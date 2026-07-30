const promise = new Promise((resolve, reject) => {
    const result = 10;
    resolve(result);
});

const p = promise.then((num) => num + 1);
console.log(p)
p.then((num) => console.log(num));


promise.then((num) => num + 1).then((num) => console.log(num));
// 이렇게 줄여서 표현 할 수 있다.


//즉시 성공 Promise

// resolve와 then
new Promise((resolve, reject) => {
    resolve(10);
});

Promise.resolve(10);

function getData(){
    return Promise.resolve('데이터');
};

getData().then(console.log);

//체이닝 사용
Promise.resolve(1).then((num) => num + 1).then(console.log);

//즉시실패 promise
// reject과 catch
Promise.reject('에러').catch(console.log);

function checkAge(age){
    if(age < 18){
        return Promise.reject('미성년자');
    }
    return Promise.resolve('미성년자 아님');
};

checkAge(2).then(console.log).catch(console.log);
checkAge(25).then(console.log).catch(console.log);