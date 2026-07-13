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

// 연습1) Size 타입정의 S, M, L
// selectedSize M 선언 후 console.log()
type Size = 'S' | 'M'| 'L';
const selectedSize1 : Size = 'M';
console.log(selectedSize1)

function selectedSize (size : Size){
    return size
}
console.log(selectedSize('M'))

// 연습2) Category 에 home 을 더해 HomeCategory타입 추가
type HomeCategory = Category | 'home';

function homeCategoryLable(homeCategory : HomeCategory) : string {
    
    return homeCategory;
}
console.log(homeCategoryLable('home'))


// 연습3) ShippingStatus타입 만들고 'preparing' | 'shipping' | 'delivered' 
//statusLabel 함수에서 한글 문구 반환
type ShippingStatus = 'preparing' | 'shipping' | 'delivered';
function statusLabel(shippingStatus : ShippingStatus) : string{
    switch (shippingStatus){        
        case 'preparing' : 
            return '준비중';
        case 'shipping' : 
            return '배송중';
        case 'delivered' : 
            return '배달완료';
     }
}

console.log("statusLabel : ", statusLabel('preparing')); // 준비중 출력