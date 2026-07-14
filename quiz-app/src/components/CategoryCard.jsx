import { Link } from 'react-router-dom'

// 홈 화면의 퀴즈 종류 카드 1개.
// 누르면 /quiz/react 같은 주소로 이동합니다. (ch16 Link)
function CategoryCard({ category, count }) {
  return (
    <Link to={`/quiz/${category.id}`} className="category-card">
      <h3>{category.name}</h3>
      <p className="muted">{category.desc}</p>
      <span className="count">{count}문제</span>
    </Link>
  )
}

export default CategoryCard
