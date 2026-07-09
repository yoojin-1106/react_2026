import MovieCard from "./MovieCard";

export default function MovieGrid({movies, emptyText}){
    if(!movies || movies.length === 0){
        return <p className="muted">{emptyText}</p>;
    }

    return (
        <div className="movie-grid">
            {
                movies.map((movie) => 
                    <MovieCard key={movie.imdbID} movie={movie}/>
                )
            }
        </div>
    )

}