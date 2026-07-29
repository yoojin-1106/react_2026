import type { Product } from "./product";

export interface CartItem{
    product : Product
    quantity : number
}

export interface CartState{
    items : CartItem[]
}

export type CartAction = {type : 'ADD', product : Product} 
                        | {type : 'REMOVE', productId : string}
                        | {type : 'SET_QUANTITY', productId : string, quantity : number}
                        | {type : 'CLEAR'}