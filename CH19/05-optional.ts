interface Product{
    id : string
    name : string
    price : number
    discount? : number
}
//     discount? : number ->  있어도 되고 없어도 되 옵션

const headphone : Product = {
      id : "p01"
    , name : "에어팟프로"
    , price : 289000
}

const keyboad : Product = {
      id : "k01"
    , name : "해피해킹 프로페셔널"
    , price : 360000
    , discount : 0.1
}

function salePrice(product : Product | undefined) : string {
/* 
    product?.name -> Product에 undefined가 들어오면 에러를 뱉지 말고 undefined를 바로 return
    ?? 왼쪽이 undefined 인 경우 오른쪽 '상품'을 출력
*/
    const name = product?.name ?? '상품'
    // const price = product.price 라고 쓰면 undefined이 들어올 수 있어 에러가 발생한다.
    return name;
}

console.log(salePrice(headphone));
console.log(salePrice(keyboad));