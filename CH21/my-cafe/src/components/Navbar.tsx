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
                    <img src="/images/orage.png" alt="logo"/>
                    작은까페
                </NavLink>
                <div className="nav-links">
                    <NavLink to='/' className="nav-link">
                        홈
                    </NavLink>
                   {user ? 
                   (
                    <>
                        <span className='nav-link'>{user.nickname} 님</span>
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