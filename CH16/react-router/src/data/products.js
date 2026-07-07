export const products =[
      {id : 1, name : "무선키보드", price : 32000, category : "주변기기", desc : "111111"}
    , {id : 2 , name : "유선키보드", price : 36000, category : "주변기기", desc : "222222"}
    , {id : 3, name : "텐키리스키보드", price : 60000, category : "주변기기", desc : "333333"}
    , {id : 4, name : "풀배열키보드", price : 25000, category : "주변기기", desc : "444444"}
    , {id : 5, name : "키크론키보드", price : 70000, category : "주변기기", desc : "555555"}
    , {id : 6, name : "해피해킹키보드", price : 300000, category : "주변기기", desc : "666666"}
    , {id : 7, name : "독거미키보드", price : 55000, category : "주변기기", desc : "777777"}
    , {id : 8, name : "앱코키보드", price : 120000, category : "주변기기", desc : "888888"}
    , {id : 9, name : "목새키보드", price : 85000, category : "주변기기", desc : "999999"}
    , {id : 10, name : "유선키보드1", price : 36000, category : "주변기기", desc : "222222"}
    , {id : 11, name : "텐키리스키보드1", price : 60000, category : "주변기기", desc : "333333"}
    , {id : 12, name : "풀배열키보드1", price : 25000, category : "주변기기", desc : "444444"}
    , {id : 13, name : "키크론키보드1", price : 70000, category : "주변기기", desc : "555555"}
    , {id : 14, name : "해피해킹키보드1", price : 300000, category : "주변기기", desc : "666666"}
    , {id : 15, name : "독거미키보드1", price : 55000, category : "주변기기", desc : "777777"}
    , {id : 16, name : "앱코키보드1", price : 120000, category : "주변기기", desc : "888888"}
    , {id : 17, name : "목새키보드1", price : 85000, category : "주변기기", desc : "999999"}
];

export function findProductById(id){
    console.log("findProductById id : ", typeof id);

    return products.find((p) => { 
         console.log("findProductById products: ", typeof p.id, p.id) 
         return p.id === Number(id)
        })
}

// 나중엔 백엔드로 대체