import { NavLink } from 'react-router-dom'

// NavLink 는 Link 와 같지만, 현재 페이지면 자동으로 active 클래스를 붙여줍니다. (ch16)
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        퀴즈 앱
      </NavLink>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/admin">문제 관리</NavLink>
    </nav>
  )
}

export default Navbar
