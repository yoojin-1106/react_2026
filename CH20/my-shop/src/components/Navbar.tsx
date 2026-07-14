import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <header className="navbar">
            <nav className="navbar-inner">
                <NavLink to='/' className="brand">
                    마이쇼핑
                </NavLink>
                <div className="nav-links">
                    <NavLink to='/' className="nav-link">
                        홈
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}