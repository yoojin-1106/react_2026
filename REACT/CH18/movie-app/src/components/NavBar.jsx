import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";


export default function Navbar(){

    const { favorites } = useFavoritesContext();
    
    return (
        <nav className="navbar">
            <span className="brand">영화놀이터</span>
            <NavLink to="/">검색</NavLink>
            <NavLink to="/favorites">즐겨찾기
                {favorites.length > 0 && ( 
                   <span className="badge">{favorites.length}</span>
                )}
            </NavLink>
        </nav>
    )
}