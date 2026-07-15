import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Navbar(){
    const {totalCount} = useCart();

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
                    <NavLink to='/cart' className="nav-link">
                        장바구니
                        {
                            totalCount > 0 &&
                                <span className="cart-badge">{totalCount}</span>
                         }
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}