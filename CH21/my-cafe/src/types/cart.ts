import type { Menu } from "./menu";

export interface CartItem{
    menu : Menu
    quantity : number
}

export interface CartState{
    items : CartItem[]
}

export type CartAction = {type : 'ADD', menu : Menu} 
                        | {type : 'REMOVE', menuId : number}
                        | {type : 'SET_QUANTITY', menuId : number, quantity : number}
                        | {type : 'CLEAR'}