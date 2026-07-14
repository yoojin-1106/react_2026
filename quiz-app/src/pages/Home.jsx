import { categories, getQuestionsByCategory } from '../data/questions'
import { useQuestions } from '../context/QuestionsContext'
import CategoryCard from '../components/CategoryCard'

// 홈: 어떤 퀴즈를 풀지 고르는 화면
function Home() {
  const { questions } = useQuestions() // 문제 은행을 Context 에서 꺼냅니다

  return (
    <div>
      <header className="page-head center">
        <h1>어떤 퀴즈를 풀어볼까요?</h1>
        <p className="muted">카테고리를 골라 문제를 풀고 점수를 확인해보세요.</p>
      </header>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            count={getQuestionsByCategory(questions, category.id).length}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
