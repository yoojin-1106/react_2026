import { useState, createContext, useContext } from "react";
import { useFavorites } from "../hooks/useFavorites";

const FavoritesContext = createContext(null);

export function FavoritesProvider({children}){
    const favorites = useFavorites();
    return <FavoritesContext.Provider value={favorites}>{children}</FavoritesContext.Provider>

}

//어느컴포넌트에서도 가져다 쓸수 있는 함수- 훅을 만듭니다.
export function useFavoritesContext(){
    const ctx = useContext(FavoritesContext);
    console.log(ctx);
    if(!ctx){
        throw new Error(`useFavoritesContext는 FavoritesProvider 안에서만 사용할 수 있어요`);
    }

    return ctx;
}