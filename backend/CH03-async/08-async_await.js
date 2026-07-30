async function fun1() {
    return 'hello1';
}

fun1().then(console.log);

function fun2() {
    return new Promise((resolve, reject) => {
        resolve('hello2'); 
    })
}

fun2().then(console.log);

async function fun3() {
    let name = await fun1();
    console.log(name);
    // await가 끝나 name에 값이 채워지면 console을 찍는다.
}

fun3();