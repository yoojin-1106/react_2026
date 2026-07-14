import ChoiceList from './ChoiceList'
import ShortAnswerInput from './ShortAnswerInput'

// 문제 1개를 그리는 컴포넌트입니다.
// 이 파일이 이 앱의 핵심 아이디어입니다.
// 문제 타입(single / short)에 따라 "아래쪽 답 입력 부분만" 갈아끼웁니다.
function QuestionCard({ question, selected, onSelect }) {
  const isSingle = question.type === 'single'

  return (
    <div className="card question-card">
      <div className="question-head">
        <span className={isSingle ? 'tag' : 'tag tag-short'}>
          {isSingle ? '객관식' : '주관식'}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      {isSingle ? (
        <ChoiceList
          choices={question.choices}
          selected={selected}
          onSelect={onSelect}
        />
      ) : (
        <ShortAnswerInput value={selected} onChange={onSelect} />
      )}
    </div>
  )
}

export default QuestionCard
