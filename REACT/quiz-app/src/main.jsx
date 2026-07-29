import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { QuestionsProvider } from './context/QuestionsContext'
import { ResultProvider } from './context/ResultContext'

// 감싸는 순서:
//   BrowserRouter   -> 주소(라우팅)를 쓸 수 있게
//   QuestionsProvider -> 앱 전체가 "문제 은행"을 공유
//   ResultProvider    -> 앱 전체가 "채점 결과"를 공유
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QuestionsProvider>
        <ResultProvider>
          <App />
        </ResultProvider>
      </QuestionsProvider>
    </BrowserRouter>
  </StrictMode>,
)
