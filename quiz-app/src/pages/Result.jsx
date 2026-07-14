import { Link, useNavigate } from 'react-router-dom'
import { useResult } from '../context/ResultContext'
import ScoreBoard from '../components/ScoreBoard'
import ReviewItem from '../components/ReviewItem'

// 결과 화면 (/result) : 점수 + 오답노트
function Result() {
  const { result, clearResult } = useResult()
  const navigate = useNavigate()

  // 새로고침하면 Context 값이 사라집니다.
  // 그럴 땐 빈 화면 대신 안내를 보여줍니다. (ch16 방어 코드)
  if (result === null) {
    return (
      <div className="state-box">
        <h1>결과가 없어요</h1>
        <p className="muted">퀴즈를 먼저 풀어주세요.</p>
        <Link to="/" className="primary-link">
          퀴즈 고르러 가기 →
        </Link>
      </div>
    )
  }

  const { category, questions, answers, score } = result

  function handleRetry() {
    clearResult()
    navigate(`/quiz/${category.id}`) // 같은 퀴즈 다시 풀기
  }

  return (
    <div>
      <header className="page-head center">
        <p className="muted">{category.name}</p>
        <h1>채점 결과</h1>
      </header>

      <ScoreBoard score={score} />

      <div className="button-row center-row">
        <button type="button" className="primary" onClick={handleRetry}>
          다시 풀기
        </button>
        <button type="button" onClick={() => navigate('/')}>
          다른 퀴즈 풀기
        </button>
      </div>

      <h2 className="section-title">오답노트</h2>
      <ul className="review-list">
        {questions.map((question, i) => (
          <ReviewItem
            key={question.id}
            number={i + 1}
            question={question}
            userAnswer={answers[question.id]}
          />
        ))}
      </ul>
    </div>
  )
}

export default Result
