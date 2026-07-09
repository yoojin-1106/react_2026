import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieCard({movie}){
    const hasPoster = movie.Poster && movie.Poster !== 'N/A';
   // console.log(hasPoster);

    return (
        <Link to={`movie/${movie.imdbID}`} className="movie-card">
            <div className="poster">
                {
                    hasPoster ? 
                        (<img src={movie.Poster} alt={`${movie.Title}`}></img>)
                        : 
                        (<div className="poster-empty" >포스터 없음</div>)
                 }
            </div>
            <div className="movie-info"> 
                 <h3>{movie.Title}</h3>
                 <p className="muted">{movie.Year}</p>
            </div>
        </Link>
    )
}