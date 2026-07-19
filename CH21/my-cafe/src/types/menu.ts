export interface Menu {
    id : number;
    name : string;
    englishName : string;
    price : number;
    category : string;
    image : string;
    options : string[];
    isAvailable : boolean;
    description : string;
    stock : number;
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
      "description": "달고나의 특유한 맛이 우유 위에 올라가 더욱 맛있어지는 커피라떼".
      "stock" : 999
*/