import { NavLink } from "react-router-dom";

export default function Navbar(){
        return (
            <nav className="navbar">
                <span className="brand">게시판</span>
                <NavLink to="/">홈</NavLink>
                <NavLink to="/">게시판</NavLink>
            </nav>
        )
}