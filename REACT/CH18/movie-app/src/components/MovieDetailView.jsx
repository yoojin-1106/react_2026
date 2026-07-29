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
                    <p className="muted">{movie.Year ? `개봉년도 : ${movie.Year}` : ''} </p>  
                    <p className="muted">{movie.Released ? `출시일 : ${movie.Released}` : ''} </p>  
                    <p className="muted">{movie.Genre ? `장르 : ${movie.Genre}` : ''} </p>  
                    <p className="muted">{movie.Director ? `감독 : ${movie.Director}` : ''} </p>  
                    <p className="muted">{movie.Runtime ? `상영시간 : ${movie.Runtime}` : ''} </p>  
                    <p className="muted">{movie.Actors ? `출연진 : ${movie.Actors}` : ''} </p>  
                    <p className="muted">{movie.Country ? `국가 : ${movie.Country}` : ''} </p>  
                    <p className="muted">{movie.Awards ? `수상이력 :  ${movie.Awards}` : ''}</p>
                    
                    <p className="muted">{movie.Type ? `타입 : ${movie.Type}` : ''} </p>  
                    <p className="muted">{movie.DVD ? `DVD : ${movie.DVD}` : ''} </p>  
                    <p className="muted">{movie.BoxOffice ? `BoxOffice :  ${movie.BoxOffice}` : ''}</p>
                    <p className="muted">{movie.Production ? `프로덕션 :  ${movie.Production}` : ''}</p>
                    <p className="muted">{movie.Website ? `Website :  ${movie.Website}` : ''}</p>
                    
                    {movie.imdbRating && movie.imdbRating !== 'N/A' &&(
                        <p className="rating">평점 : {movie.imdbRating}</p>
                    )}
                
                    <p className="Plot">{movie.Plot || '줄거리 없음'}</p>
                </div>
            </div>
        </div>    
    )
}