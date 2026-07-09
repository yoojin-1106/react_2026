import { Link } from "react-router-dom";

export default function MovieDetailView({movie}){
     const hasPoster = movie.Poster && movie.Poster !== 'N/A';
     console.log(hasPoster);

    return (
        <div className="container">
            <Link to="/" className="back-link">뒤로 가기</Link>
            <div className="detail">
                <div className="detail-poster">
                    {
                        hasPoster ? 
                            (<img src={movie.Poster}/>)
                            : 
                            (<div className="poster-empty big" >포스터 없음</div>)
                    }
                </div>
                <div className="detail-body"> 
                    <h3>{movie.Title}</h3>
                    <p className="muted">
                            {movie.Year}
                            {movie.Released}
                            {movie.Genre}
                            {movie.Director ? `감독은 ${movie.Director}` : ''}
                    </p>
                    {movie.imdbRating && movie.imdbRating !== 'N/A' &&(
                        <p className="rating">평점 : {movie.imdbRating}</p>
                    )}
                
                    <p className="Plot">{movie.Plot || '줄거리 없음'}</p>
                </div>
            </div>
        </div>    
    )
}