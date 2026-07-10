import { useState, useEffect, Suspense } from "react";
import { searchMovies } from "../api/movies";
const STORAGE_KEY = "ch18-favorites";

function readStorage(){
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
        //saved -> movie객체가 담겨져 있다.
    } catch (e) {
        return [];
    }
}

export function useFavorites(){
    // useState -> readStorage함수명만 넘기면 리액트에서 이 컴포넌트가 한번 로딩될때 첫번째 랜더에서 한번만 값을 가지고 온다. 
    // readStorage() 이 컴포넌트가 랜더 될때마다 호출됩니다.
    const [favorites, setFavorites] = useState(readStorage);

    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites])

    // 즐겨찾기 true, false
    function isFavorite(id){
        //some : favorites 안에 id 이 하나라도 있으면 true 없으면 false
        // console.log('isFavorite', favorites, id)
        return favorites.some((movie) => movie.imdbID === id);

    }

    // 즐겨찾기 추가
    function add(movie){
        // movie를 favorite에 추가할때 동일 id체크
        setFavorites((prev) => {
            if(prev.some((m) => m.imdbID === movie.imdbID)) return prev;
            
            return [...prev, movie];
        });
    }

    //즐겨찾기 제거
    function remove(id){
        
        setFavorites((prev) => 
            prev.filter((movie) => movie.imdbID !== id)
        );
    }

    //즐겨찾기 버튼 토글
    function toggle(movie){
        
        if(isFavorite(movie.imdbID)){
            remove(movie.imdbID);
        }else{
            add(movie);
        }
    }

    return {favorites, setFavorites, isFavorite, add, remove, toggle}

}