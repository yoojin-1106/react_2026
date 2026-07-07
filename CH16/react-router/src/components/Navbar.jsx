import { NavLink } from "react-router-dom";

export default function Navbar(){
        return (
            <nav className="navbar">
                <span className="brand">키보드샵</span>
                <NavLink to="/">홈</NavLink>
                <NavLink to="/about">소개</NavLink>
                <NavLink to="/products">상품목록</NavLink>
                <NavLink to="/contact">연락처</NavLink>
            </nav>
        )
}