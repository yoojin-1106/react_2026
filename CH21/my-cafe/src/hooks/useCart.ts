import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export function useCart() {
    const ctx = useContext(CartContext);
    if(!ctx){
        throw new Error(`useCart 는 CartProvider 안에서만 쓸 수 있습니다.`);
    }

    return ctx;
}