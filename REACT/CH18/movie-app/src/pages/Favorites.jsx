import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useFavoritesContext } from "../context/FavoritesContext";
import MovieGrid from "../components/MovieGrid";

export default function Favorites(){
    const { favorites } = useFavoritesContext();

    return (
        <div className="container">
            <h1>내가 좋아하는 영화</h1>
            { favorites.length === 0 ? 
                (
                    <div className="state-box">
                        <p className="muted">아직 즐겨찾기한 영화가 없습니다.</p>
                        <Link to='/' className="primary-link">영화 검색하러 가기</Link>
                    </div>
                ) 
                : 
                (
                    <>
                        <p>{favorites.length}편을 저장하였습니다</p>
                        <MovieGrid movies={favorites} />
                    </>    
                )
            }
        </div>
    )
}