import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

// 앱의 지도(地圖)입니다. 주소마다 어떤 페이지를 보여줄지 정합니다. (ch16)
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:categoryId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
