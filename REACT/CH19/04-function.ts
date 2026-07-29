

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

//연습1) inStock 매개변수  true면 재고 있음 반환 , false 재고 없음 반환 stockLabel함수
function stockLabel(inStock : boolean) : string{
    if(inStock){
        return `재고 있음`;
    }else{
       return `재고 없음`; 
    }
}
console.log(stockLabel(false));


//연습2) baseFree 기본값 3000원,shippingFee 함수 선언
//extraKg KG이 더해질때마다 KG당 500원 추가

function shippingFee(baseFee : number = 3000, extraKg : number = 0) : number{
    return baseFee + (extraKg * 500);
}
console.log(shippingFee(3000, 2))