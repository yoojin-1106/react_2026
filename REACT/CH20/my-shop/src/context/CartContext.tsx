import { createContext, useReducer, type ReactNode } from "react";
import type { CartItem, CartState, CartAction, Product } from "../types";

function cartReducer(state : CartItem[], action : CartAction) : CartItem[]{
    switch (action.type) {
        case 'ADD':
            /* 
                1. 재고유무조사
                2. 제품여부조사
            */

            {
                if(action.product.stock < 1) return state;

                const exists = state.some((it) => it.product.id === action.product.id)

                if(exists){
                    return state.map((it) => it.product.id === action.product.id ? {...it, quantity : Math.min(it.quantity + 1, it.product.stock)} : it)
                    /* 
                       Math.min(a, b) -> 더 작은 숫자
                        Math.min(1, 5) -> 1선택
                    */
                }

                return [...state, {product : action.product, quantity : 1}];

            }

        case 'REMOVE':
            {
                return state.filter((it) => it.product.id !== action.productId)
            }
            
        case 'SET_QUANTITY':
            {
                return state.map((it) => it.product.id === action.productId ? {...it, quantity : Math.min(action.quantity, it.product.stock) } : it)
            }
        case 'CLEAR':
            {
                return [];
            }

    }
}

export interface CartContextValue{
    items : CartItem[];
    addItem : (product : Product) => void;
    removeItem : (productId : string) => void;
    setQuantity : (productId : string, quantity : number) => void;
    clear : () => void;
    totalCount : number;
    totalPrice : number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({children} : {children : ReactNode}){
    const [items, dispatch] = useReducer(cartReducer, []);
    const value : CartContextValue = {
          items
        , addItem : (product) => dispatch({type : 'ADD', product : product})
        , removeItem : (productId) => dispatch({type : 'REMOVE', productId : productId})
        , setQuantity : (productId, quantity) => dispatch({type : 'SET_QUANTITY', productId, quantity})
        , clear : () => dispatch({type : 'CLEAR'})
        , totalCount : items.reduce((sum, it) => sum + it.quantity, 0)
        , totalPrice : items.reduce((sum, it) => sum + (it.product.price * it.quantity), 0)
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}