import { useState, useEffect } from 'react'
import { categories } from '../data/questions'

// 문제 추가 / 수정 폼입니다.
// ch17 의 PostForm 과 구조가 똑같습니다.
//   - editingQuestion 이 있으면 "수정 모드", 없으면 "새 문제 작성 모드"
//   - 내 상태는 내가 들고 있고, 완성된 결과만 onSubmit 으로 부모에게 넘깁니다.
function QuestionForm({ editingQuestion, onSubmit, onCancel }) {
  const [categoryId, setCategoryId] = useState('javascript')
  const [type, setType] = useState('single')
  const [question, setQuestion] = useState('')
  const [choices, setChoices] = useState(['', '', '', '']) // 객관식 보기 4칸
  const [correctIndex, setCorrectIndex] = useState(0) // 몇 번째 보기가 정답인지
  const [shortAnswer, setShortAnswer] = useState('') // 주관식 정답 (쉼표로 여러 개)
  const [explanation, setExplanation] = useState('')

  // 수정 버튼을 누르면 그 문제의 값으로 폼을 채웁니다. (ch13 useEffect + 의존성 배열)
  useEffect(() => {
    if (editingQuestion) {
      setCategoryId(editingQuestion.categoryId)
      setType(editingQuestion.type)
      setQuestion(editingQuestion.question)
      setExplanation(editingQuestion.explanation)

      if (editingQuestion.type === 'single') {
        setChoices(editingQuestion.choices)
        setCorrectIndex(editingQuestion.choices.indexOf(editingQuestion.answers[0]))
        setShortAnswer('')
      } else {
        setChoices(['', '', '', ''])
        setCorrectIndex(0)
        setShortAnswer(editingQuestion.answers.join(', '))
      }
    } else {
      resetForm()
    }
  }, [editingQuestion])

  function resetForm() {
    setCategoryId('javascript')
    setType('single')
    setQuestion('')
    setChoices(['', '', '', ''])
    setCorrectIndex(0)
    setShortAnswer('')
    setExplanation('')
  }

  // 보기 4칸 중 i 번째만 바꾼 "새 배열"을 만듭니다. (ch05 불변성)
  function handleChoiceChange(i, value) {
    setChoices((prev) => prev.map((c, idx) => (idx === i ? value : c)))
  }

  function handleSubmit(e) {
    e.preventDefault() // 폼 제출 시 새로고침 방지

    if (question.trim() === '') {
      alert('문제를 입력해주세요')
      return
    }

    // 타입에 따라 저장할 모양을 만듭니다.
    let newQuestion
    if (type === 'single') {
      const filled = choices.map((c) => c.trim())
      if (filled.some((c) => c === '')) {
        alert('보기 4개를 모두 입력해주세요')
        return
      }
      newQuestion = {
        categoryId,
        type,
        question: question.trim(),
        choices: filled,
        answers: [filled[correctIndex]], // 정답도 "보기 글자 그대로" 저장
        explanation: explanation.trim(),
      }
    } else {
      const list = shortAnswer
        .split(',') // "key, 키" -> ['key', ' 키']
        .map((a) => a.trim()) // 공백 제거
        .filter((a) => a !== '') // 빈 것 제거
      if (list.length === 0) {
        alert('정답을 입력해주세요')
        return
      }
      newQuestion = {
        categoryId,
        type,
        question: question.trim(),
        choices: [], // 주관식은 보기가 없습니다
        answers: list,
        explanation: explanation.trim(),
      }
    }

    onSubmit(newQuestion)
    resetForm()
  }

  const isEditing = Boolean(editingQuestion)

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{isEditing ? '문제 수정' : '새 문제 추가'}</h2>

      <div className="form-row">
        <label>
          <span>카테고리</span>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>문제 유형</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="single">객관식 (4지선다)</option>
            <option value="short">주관식 (단답형)</option>
          </select>
        </label>
      </div>

      <label>
        <span>문제</span>
        <input
          type="text"
          placeholder="예) 상태를 기억할 때 쓰는 Hook은?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>

      {/* 객관식일 때만 보기 4칸을 보여줍니다 */}
      {type === 'single' ? (
        <fieldset className="choices-editor">
          <legend>보기 (정답을 왼쪽 동그라미로 선택하세요)</legend>
          {choices.map((choice, i) => (
            <div key={i} className="choice-editor-row">
              <input
                type="radio"
                name="correct"
                checked={correctIndex === i}
                onChange={() => setCorrectIndex(i)}
              />
              <input
                type="text"
                placeholder={`보기 ${i + 1}`}
                value={choice}
                onChange={(e) => handleChoiceChange(i, e.target.value)}
              />
            </div>
          ))}
        </fieldset>
      ) : (
        <label>
          <span>정답 (여러 개면 쉼표로 구분: key, 키)</span>
          <input
            type="text"
            placeholder="예) key"
            value={shortAnswer}
            onChange={(e) => setShortAnswer(e.target.value)}
          />
        </label>
      )}

      <label>
        <span>해설</span>
        <textarea
          placeholder="정답인 이유를 짧게 적어주세요"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
      </label>

      <div className="button-row">
        <button type="submit" className="primary">
          {isEditing ? '수정 완료' : '추가하기'}
        </button>
        {isEditing && (
          <button type="button" onClick={onCancel}>
            취소
          </button>
        )}
      </div>
    </form>
  )
}

export default QuestionForm
