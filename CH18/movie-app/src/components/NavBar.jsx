import { NavLink } from "react-router-dom";

export default function Navbar(){
    
        return (
            <nav className="navbar">
                <span className="brand">영화놀이터</span>
                <NavLink to="/">검색</NavLink>
                <NavLink to="/favorites">즐겨찾기</NavLink>
            </nav>
        )
}