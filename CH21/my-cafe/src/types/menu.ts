import type { Category } from "./category";

export interface Menu {
    id : number;
    name : string;
    englishName : string;
    price : number;
    category : Category;
    image : string;
    options : string[];
    isAvailable : boolean;
    description : string;
}

export function describe(category : Category) : string {
    //  : string -> return의 type을 지정

    switch (category){        
        case 'coffee'  : 
            return '커피';
        case 'tea' : 
            return '논커피';
        case 'dessert' : 
            return '디저트';
     }

     return '카테고리가 없습니다.';

}

/* 
   "id": 114,
      "name": "달고나라떼",
      "englishName": "Dalgona Latte",
      "category": "coffee",
      "price": 4600,
      "image": "https://images.unsplash.com/photo-1592318780016-e5bca86e74fa?w=500",
      "options": ["HOT", "ICE"],
      "isAvailable": true,
      "description": "달고나의 특유한 맛이 우유 위에 올라가 더욱 맛있어지는 커피라떼"

*/