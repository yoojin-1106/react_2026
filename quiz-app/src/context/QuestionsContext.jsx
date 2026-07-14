import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { questions as initialQuestions } from '../data/questions'

// "문제 은행"을 앱 전체가 함께 쓰는 통(Context)에 담습니다. (ch15)
// 서버(Supabase) 대신 localStorage 에 저장합니다.
//  - 앱을 처음 열면 data/questions.js 의 기본 문제로 시작하고
//  - 관리자 화면에서 추가/수정/삭제하면 브라우저에 저장됩니다.
const QuestionsContext = createContext(null)

export function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useLocalStorage('ch20-questions', initialQuestions)

  // 추가: 새 id 를 만들어 맨 뒤에 붙입니다. (ch12 TodoApp 과 같은 방식)
  function addQuestion(question) {
    setQuestions((prev) => {
      const nextId = prev.length === 0 ? 1 : Math.max(...prev.map((q) => q.id)) + 1
      return [...prev, { ...question, id: nextId }]
    })
  }

  // 수정: id 가 같은 문제만 새 값으로 갈아끼운 "새 배열"을 만듭니다.
  function editQuestion(id, question) {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, ...question } : q)))
  }

  // 삭제: id 가 다른 것만 남긴 "새 배열"을 만듭니다.
  function removeQuestion(id) {
    setQuestions((prev) => prev.filter((q) => q.id !== id))
  }

  // 기본 문제로 되돌리기 (수업 중 망가뜨렸을 때 탈출구)
  function resetQuestions() {
    setQuestions(initialQuestions)
  }

  const value = { questions, addQuestion, editQuestion, removeQuestion, resetQuestions }

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>
}

// 어느 컴포넌트에서든 이 훅 하나로 문제 은행을 꺼내 씁니다.
export function useQuestions() {
  const context = useContext(QuestionsContext)
  if (context === null) {
    throw new Error('useQuestions 는 <QuestionsProvider> 안에서만 쓸 수 있어요')
  }
  return context
}

export default QuestionsContext
