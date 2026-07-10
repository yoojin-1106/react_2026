

function formatPrice(won : number) : string {
    return `${won}원`;
}

console.log(formatPrice(12000));

function discount(price : number, rate : number = 0.1) : number {
    return Math.round(price * (1 - rate));

}
// rate : number = 0.1 -> 초기값 변경 가능

console.log("10%할인 가격", discount(212300));
console.log("20%할인 가격 : ", discount(345100, 0.2));


function discount20(price : number, rate : number = 0.2) : number {
    return Math.round(price * (1 - rate));

}
console.log("20%할인 가격", discount20(345100));