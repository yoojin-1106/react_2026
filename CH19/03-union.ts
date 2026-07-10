//리터럴 유니온
type Category = 'electronics' | 'fashion' | 'book';
// category 타입에는 'electronics' | 'fashion' | 'book' 이렇게만 올 수있음

function describe(category : Category) : string {
    //  : string -> return의 type을 지정

    switch (category){        
        case 'electronics' : 
            return '전자기기';
        case 'fashion' : 
            return '패션';
        case 'book' : 
            return '도서';
     }

}

console.log("describe : ", describe('electronics')); // 전자기기 출력
// console.log(describe('food')); -> 에러발생

function priceText(price : number | null ) : string {
    if(price === null) return '가격미정';
    return `${price}원`;
}

console.log("priceText : ", priceText(123000)); 
console.log("priceText : ", priceText(null)); // 가격미정 출력

//유니온 확장
type Filter = Category | 'all';
//console.log("Filter : ", Filter); 

function filterLable(filter : Filter) : string {
    if(filter === 'all') return '전체';
    return describe(filter);
}