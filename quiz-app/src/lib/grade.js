// 채점 함수 (React 와 상관없는 "순수 자바스크립트")
// 화면 코드와 분리해두면 눈으로 읽기도, 나중에 테스트하기도 쉽습니다.

// 사용자가 쓴 답을 비교하기 좋게 다듬습니다.
// "  Key " -> "key"  (앞뒤 공백 제거 + 소문자로)
function normalize(text) {
  if (text === undefined || text === null) return ''
  return String(text).trim().toLowerCase()
}

// 문제 1개 채점.
// 객관식(single)이든 주관식(short)이든 규칙이 똑같습니다.
// -> "정답 목록 안에 사용자의 답이 들어있나?"
export function isCorrect(question, userAnswer) {
  const answers = question.answers.map(normalize) // ['usestate']
  return answers.includes(normalize(userAnswer))
}

// 전체 채점.
// answers 는 { 문제id: '사용자가 고른 답' } 모양의 객체입니다.
export function grade(questions, answers) {
  const correctList = questions.filter((q) => isCorrect(q, answers[q.id]))
  const total = questions.length
  const correct = correctList.length

  return {
    total, // 전체 문제 수
    correct, // 맞힌 개수
    wrong: total - correct, // 틀린 개수
    score: total === 0 ? 0 : Math.round((correct / total) * 100), // 100점 만점 점수
  }
}

// 점수에 따른 한 줄 평 (ch02 의 if / 조건문 복습)
export function getComment(score) {
  if (score === 100) return '완벽해요!'
  if (score >= 80) return '훌륭해요!'
  if (score >= 60) return '조금만 더!'
  return '복습이 필요해요'
}
