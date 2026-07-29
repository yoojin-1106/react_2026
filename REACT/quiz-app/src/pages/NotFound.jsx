import { Link } from 'react-router-dom'

// 어떤 Route 와도 맞지 않는 주소일 때 보여줄 화면 (ch16)
function NotFound() {
  return (
    <div className="state-box">
      <h1>404</h1>
      <p className="muted">그런 페이지는 없어요.</p>
      <Link to="/" className="primary-link">
        홈으로 가기 →
      </Link>
    </div>
  )
}

export default NotFound
