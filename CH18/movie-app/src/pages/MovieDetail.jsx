import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetailView from "../components/MovieDetailView";
import { getMovieDetail } from "../api/movies";


export default function MovieDetail(){
    //<Link to={`movie/${movie.imdbID}`} className="movie-card">
    const {id} = useParams();
   
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError('');
            try {   
               const data = await getMovieDetail(id);
               setMovie(data);     
            } catch (e) {
                setError(e);     
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [id]);

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러발생</div>;
   
    return (
        <MovieDetailView movie = {movie} />
    )
    
}
