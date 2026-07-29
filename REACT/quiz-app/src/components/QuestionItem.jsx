// 관리 화면의 문제 목록 한 줄입니다.
// ch17 의 PostItem 과 똑같이, 직접 지우거나 고치지 않고
// 부모가 준 함수(onEdit, onDelete)에 값만 넘겨줍니다.
function QuestionItem({ question, onEdit, onDelete }) {
  const isSingle = question.type === 'single'

  return (
    <li className="card admin-item">
      <div className="admin-item-main">
        <span className={isSingle ? 'tag' : 'tag tag-short'}>
          {isSingle ? '객관식' : '주관식'}
        </span>
        <p className="admin-question">{question.question}</p>
        <p className="muted admin-answer">정답: {question.answers.join(' / ')}</p>
      </div>

      <div className="button-row">
        <button type="button" onClick={() => onEdit(question)}>
          수정
        </button>
        <button type="button" className="danger" onClick={() => onDelete(question.id)}>
          삭제
        </button>
      </div>
    </li>
  )
}

export default QuestionItem
