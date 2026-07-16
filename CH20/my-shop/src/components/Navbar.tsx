import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";

export default function Navbar(){
    const {totalCount} = useCart();
    const {user, logout} = useAuth();

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
                    <NavLink to='/orders' className="nav-link">
                        주문내역
                    </NavLink>
                   {user ? 
                   (
                    <>
                        <span className='nav-link'>{user.name} 님</span>
                        <button type="button" className="btn btn-sm" onClick={() => logout()}>로그아웃</button>
                    </>
                   )
                   :
                   (
                    <NavLink to='/login' className="nav-link">
                        로그인
                    </NavLink>
                   )
                   }
                </div>
            </nav>
        </header>
    )
}