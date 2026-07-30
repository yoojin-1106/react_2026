const p = new Promise((resolve, reject) => {
    resolve(10);
    console.log(`1번`);
});

console.log(`2번`);
    
p
    .then((num) => {
        console.log(`3번 `, num);
    })