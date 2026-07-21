import type { MenuItem } from "./menu"

export interface CartItem{
    menuItem : MenuItem
    quantity : number
    option : string
}

export interface CartState{
    items : CartItem[]
}

export type CartAction = {type : 'ADD', menuItem : MenuItem} 
                        | {type : 'REMOVE', menuId : number}
                        | {type : 'SET_QUANTITY', menuId : number, quantity : number}
                        | {type : 'CLEAR'}