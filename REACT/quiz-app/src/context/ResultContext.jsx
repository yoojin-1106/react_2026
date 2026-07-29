import { createContext, useContext, useState } from 'react'

// 퀴즈 페이지(/quiz/react)에서 채점한 결과를
// 결과 페이지(/result)로 넘겨주기 위한 통입니다. (ch15)
//
// 페이지가 서로 다르면 props 로 넘길 수 없습니다. 그래서 Context 를 씁니다.
const ResultContext = createContext(null)

export function ResultProvider({ children }) {
  // result 모양: { category, questions, answers, score: {total, correct, wrong, score} }
  const [result, setResult] = useState(null)

  function saveResult(newResult) {
    setResult(newResult)
  }

  function clearResult() {
    setResult(null)
  }

  const value = { result, saveResult, clearResult }

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
}

export function useResult() {
  const context = useContext(ResultContext)
  if (context === null) {
    throw new Error('useResult 는 <ResultProvider> 안에서만 쓸 수 있어요')
  }
  return context
}

export default ResultContext
