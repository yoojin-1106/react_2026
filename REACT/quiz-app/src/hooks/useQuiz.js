import { useState } from 'react'

// 퀴즈를 "푸는 동안"의 상태만 담당하는 커스텀 훅입니다. (ch15)
// 화면(Quiz.jsx)은 이 훅이 돌려준 값을 그리기만 하면 됩니다.
export function useQuiz(questions) {
  // 지금 몇 번째 문제를 보고 있는가 (0부터 시작)
  const [index, setIndex] = useState(0)

  // 사용자가 지금까지 고른 답. { 문제id: '답' } 모양의 객체
  // 예) { 1: 'const', 3: 'reduce' }
  const [answers, setAnswers] = useState({})

  const total = questions.length
  const current = questions[index] // 지금 화면에 보여줄 문제 1개

  // 답을 고르거나 입력할 때 호출됩니다.
  function select(questionId, value) {
    setAnswers((prev) => ({
      ...prev, // 이전 답들은 그대로 두고 (ch06 스프레드)
      [questionId]: value, // 이 문제의 답만 새로 덮어쓰기
    }))
  }

  function next() {
    setIndex((prev) => Math.min(prev + 1, total - 1))
  }

  function prev() {
    setIndex((prev) => Math.max(prev - 1, 0))
  }

  // 지금 문제에 대해 이미 고른 답 (없으면 빈 문자열)
  const selected = current ? (answers[current.id] ?? '') : ''

  // Object.keys(answers) -> ['1', '3'] 처럼 답한 문제 id 목록
  const answeredCount = Object.keys(answers).length

  return {
    index,
    current,
    total,
    answers,
    selected,
    select,
    next,
    prev,
    isFirst: index === 0,
    isLast: index === total - 1,
    answeredCount,
    allAnswered: answeredCount === total, // 전부 풀었으면 true -> 제출 버튼 활성화
  }
}

export default useQuiz
