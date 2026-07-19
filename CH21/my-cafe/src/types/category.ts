export interface Category {
    category : string;
}


export function describe(category : Category) : string {
    //  : string -> return의 type을 지정
    console.log(category)
/*     switch (category){        
        case 'coffee'  : 
            return '커피';
        case 'tea' : 
            return '논커피';
        case 'dessert' : 
            return '디저트';
     }
*/
     return '카테고리가 없습니다.'; 

}