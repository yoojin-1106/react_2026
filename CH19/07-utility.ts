type Category = 'electronics' | 'fashion' | 'book';

interface Product{
    id : string
    name : string
    price : number
    category : Category
}



//Pick 유틸리티 함수 -> 'id' | 'name' 만
type ProductPreview = Pick<Product, 'id' | 'name'> 
const previewProduct : ProductPreview = {
      id : "p01"
    , name : "키보드"
}
//console.log(previewProduct);



//Omit 유틸리티 함수 -> id 제외하고
type NewProduct = Omit<Product, 'id'> 
const draft : NewProduct = {
      name : "기계식키보드"
    , price : 10000
    , category : 'electronics'
}
// type Category = 'electronics' | 'fashion' | 'book'; 의 값만 들어가야한다.
//console.log(draft);


//Partial 유틸리티 함수 -> optional
function updateProduct(id : string, patch : Partial<Product>){
    console.log(`${id} 수정`, patch);
}

console.log(previewProduct, draft);
updateProduct('p01', {price : 10000});
// name, category 없이도 옵셔널 하게 출력할 수 있다. 
//console.log(previewProduct, draft);


// 연습1) Product에서 id, price, category 만 뽑은 ProductPriceInfo 타입
type  ProductPriceInfo = Pick<Product, 'id' | 'price' | 'category'>
const ProductPriceInfo1 : ProductPriceInfo = {
      id : '111'
    , price : 5000
    , category : 'electronics'
}

console.log(ProductPriceInfo1);


// ************ Record type ***
//key, value, Category의 key값이 모두 들어가야한다.
const labels : Record<Category, string> = {
      electronics : '전자기기'
    , fashion : '패션'
    , book : '도서'
}

/* 
const labels : Record<Category, string> = {
      electronics : '전자기기'
    , fashion : '패션'
}
    book을 빼면 에러 발생!!

const labels2 : Record{{key : string} : string} = {...}
방식으로도 사용이 가능하다
    
*/


// ************ array type