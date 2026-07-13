export type Category = 'electronics' | 'fashion' | 'home' | 'book' | 'food'  ;

export const CATEGORY_LABELS : Record<Category, string> = {
      'electronics' : '전자기기'
    , 'fashion' : '패션'
    , 'home' : '리빙'
    , 'book' : '도서'
    , 'food' : '식품'
}

export interface Product {
    id : string
    name : string
    description : string
    price : number
    category : Category
    image : string
    stock : number
    rating : number
}


