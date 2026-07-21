import { createContext, useReducer, type ReactNode } from "react";
import type { CartItem, CartAction, MenuItem } from "../types";

function cartReducer(state : CartItem[], action : CartAction) : CartItem[]{
    switch (action.type) {
        case 'ADD':
            {
                if(action.menuItem.stock < 1) return state;

                const exists = state.some((it) => it.menuItem.id === action.menuItem.id)

                if(exists){
                    return state.map((it) => it.menuItem.id === action.menuItem.id ? {...it, quantity : Math.min(it.quantity + 1, it.menuItem.stock), option : ""} : it)
                }

                return [...state, {menuItem : action.menuItem, quantity : 1, option : ""}];

            }

        case 'REMOVE':
            {
                return state.filter((it) => it.menuItem.id !== action.menuId)
            }
            
        case 'SET_QUANTITY':
            {
                return state.map((it) => it.menuItem.id === action.menuId ? {...it, quantity : Math.min(action.quantity, it.menuItem.stock), option : "" } : it)
            }
        case 'CLEAR':
            {
                return [];
            }

    }
}

export interface CartContextValue{
    items : CartItem[];
    addItem : (menuItem : MenuItem) => void;
    removeItem : (menuId : number) => void;
    setQuantity : (menuId : number, quantity : number) => void;
    clear : () => void;
    totalCount : number;
    totalPrice : number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({children} : {children : ReactNode}){
    const [items, dispatch] = useReducer(cartReducer, []);
    const value : CartContextValue = {
          items
        , addItem : (menu) => dispatch({type : 'ADD', menuItem : menu})
        , removeItem : (menuId) => dispatch({type : 'REMOVE', menuId : menuId})
        , setQuantity : (menuId, quantity) => dispatch({type : 'SET_QUANTITY', menuId, quantity})
        , clear : () => dispatch({type : 'CLEAR'})
        , totalCount : items.reduce((sum, it) => sum + it.quantity, 0)
        , totalPrice : items.reduce((sum, it) => sum + (it.menuItem.price * it.quantity), 0)
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}