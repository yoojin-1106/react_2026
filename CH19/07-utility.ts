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
console.log(previewProduct);



//Omit 유틸리티 함수 -> id 제외하고
type NewProduct = Omit<Product, 'id'> 
const draft : NewProduct = {
      name : "기계식키보드"
    , price : 10000
    , category : 'electronics'
}
// type Category = 'electronics' | 'fashion' | 'book'; 의 값만 들어가야한다.
console.log(draft);


//Partial 유틸리티 함수 -> optional
function updateProduct(id : string, patch : Partial<Product>){
    console.log(`${id} 수정`, patch);
}

console.log(previewProduct, draft);
updateProduct('p01', {price : 10000});
// name, category 없이도 옵셔널 하게 출력할 수 있다. 
console.log(previewProduct, draft);
