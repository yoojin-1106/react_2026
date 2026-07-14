import { useState } from 'react'
import { categories, getQuestionsByCategory } from '../data/questions'
import { useQuestions } from '../context/QuestionsContext'
import QuestionForm from '../components/QuestionForm'
import QuestionItem from '../components/QuestionItem'

// 문제 관리 화면 (/admin)
// ch17 의 게시판 CRUD 와 구조가 똑같습니다. 글 대신 "문제"를 다룰 뿐입니다.
function Admin() {
  const { questions, addQuestion, editQuestion, removeQuestion, resetQuestions } =
    useQuestions()

  // 수정 중인 문제 (없으면 null = 새 문제 작성 모드)
  const [editingQuestion, setEditingQuestion] = useState(null)

  // 목록에서 어떤 카테고리를 보고 있는지
  const [filter, setFilter] = useState('all')

  function handleSubmit(data) {
    if (editingQuestion) {
      editQuestion(editingQuestion.id, data)
      setEditingQuestion(null)
    } else {
      addQuestion(data)
    }
  }

  function handleDelete(id) {
    if (!window.confirm('정말 삭제할까요?')) return
    removeQuestion(id)
    if (editingQuestion && editingQuestion.id === id) {
      setEditingQuestion(null) // 수정 중이던 문제를 지웠으면 폼도 비웁니다
    }
  }

  function handleReset() {
    if (!window.confirm('기본 문제로 되돌릴까요? 추가한 문제는 사라집니다.')) return
    resetQuestions()
    setEditingQuestion(null)
  }

  // 필터가 'all' 이면 전체, 아니면 해당 카테고리만
  const visible =
    filter === 'all' ? questions : getQuestionsByCategory(questions, filter)

  return (
    <div>
      <header className="page-head">
        <h1>문제 관리</h1>
        <p className="muted">
          추가/수정/삭제한 문제는 이 브라우저(localStorage)에 저장됩니다.
        </p>
      </header>

      <QuestionForm
        editingQuestion={editingQuestion}
        onSubmit={handleSubmit}
        onCancel={() => setEditingQuestion(null)}
      />

      <div className="toolbar">
        <div className="filter-row">
          <button
            type="button"
            className={filter === 'all' ? 'chip on' : 'chip'}
            onClick={() => setFilter('all')}
          >
            전체 {questions.length}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={filter === c.id ? 'chip on' : 'chip'}
              onClick={() => setFilter(c.id)}
            >
              {c.name} {getQuestionsByCategory(questions, c.id).length}
            </button>
          ))}
        </div>

        <button type="button" className="danger" onClick={handleReset}>
          기본 문제로 초기화
        </button>
      </div>

      {visible.length === 0 ? (
        <p className="hint">아직 문제가 없습니다. 위에서 새 문제를 추가해보세요.</p>
      ) : (
        <ul className="admin-list">
          {visible.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              onEdit={setEditingQuestion}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Admin
