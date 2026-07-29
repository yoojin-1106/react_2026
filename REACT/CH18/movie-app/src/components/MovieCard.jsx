import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites";

export default function MovieCard({movie}){
    const hasPoster = movie.Poster && movie.Poster !== 'N/A';
   // console.log(hasPoster);
   const {favorites, setFavorites, isFavorite, add, remove, toggle} = useFavorites();
   const liked = isFavorite(movie.imdbID);

   function handleHeart(e){
        e.preventDefault(); // 상세화면 이동 방지
        e.stopPropagation(); // 상세화면 이동 방지, 카드로 번지는 것을 방지
       // console.log(movie)
        toggle(movie);

   }

    return (
        <Link to={`/movie/${movie.imdbID}`} className="movie-card">
            <div className="poster">
                {
                    hasPoster ? 
                        (<img src={movie.Poster} alt={`${movie.Title}`}></img>)
                        : 
                        (<div className="poster-empty" >포스터 없음</div>)
                 }
                 <button className={`heart ${liked ? 'on' : ''}`} onClick={handleHeart} >
                   {liked ? '해제' : '추가'}     
                 </button>
            </div>
            <div className="movie-info"> 
                 <h3>{movie.Title}</h3>
                 <p className="muted">{movie.Year}</p>
            </div>
        </Link>
    )
}