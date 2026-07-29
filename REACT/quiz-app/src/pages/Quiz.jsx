import { useParams, useNavigate, Link } from 'react-router-dom'
import { findCategory, getQuestionsByCategory } from '../data/questions'
import { useQuestions } from '../context/QuestionsContext'
import { useResult } from '../context/ResultContext'
import { useQuiz } from '../hooks/useQuiz'
import { grade } from '../lib/grade'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'

// 문제 푸는 화면 (/quiz/react)
function Quiz() {
  const { categoryId } = useParams() // 주소에서 카테고리를 꺼냅니다 (ch16)
  const navigate = useNavigate()

  const { questions: allQuestions } = useQuestions()
  const { saveResult } = useResult()

  const category = findCategory(categoryId)
  const questions = getQuestionsByCategory(allQuestions, categoryId)

  // 퀴즈 진행 상태는 커스텀 훅이 전부 맡습니다 (ch15)
  const quiz = useQuiz(questions)

  // 없는 카테고리이거나 문제가 하나도 없을 때
  if (!category || questions.length === 0) {
    return (
      <div className="state-box">
        <h1>풀 수 있는 문제가 없어요</h1>
        <p className="muted">문제 관리 화면에서 문제를 먼저 추가해주세요.</p>
        <Link to="/admin" className="primary-link">
          문제 관리로 가기 →
        </Link>
      </div>
    )
  }

  function handleSubmit() {
    const score = grade(questions, quiz.answers) // 채점! (lib/grade.js)

    // 결과를 Context 에 담아두고 결과 페이지로 이동합니다.
    saveResult({
      category,
      questions,
      answers: quiz.answers,
      score,
    })
    navigate('/result')
  }

  return (
    <div>
      <header className="page-head">
        <Link to="/" className="back-link">
          ← 카테고리 선택
        </Link>
        <h1>{category.name}</h1>
      </header>

      <ProgressBar current={quiz.index + 1} total={quiz.total} />

      <QuestionCard
        question={quiz.current}
        selected={quiz.selected}
        onSelect={(value) => quiz.select(quiz.current.id, value)}
      />

      <div className="quiz-nav">
        <button type="button" onClick={quiz.prev} disabled={quiz.isFirst}>
          ← 이전
        </button>

        {/* 마지막 문제에서만 제출 버튼이 나옵니다 */}
        {quiz.isLast ? (
          <button
            type="button"
            className="primary"
            onClick={handleSubmit}
            disabled={!quiz.allAnswered}
          >
            {quiz.allAnswered
              ? '제출하고 채점하기'
              : `아직 ${quiz.total - quiz.answeredCount}문제 남았어요`}
          </button>
        ) : (
          <button type="button" className="primary" onClick={quiz.next}>
            다음 →
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz
