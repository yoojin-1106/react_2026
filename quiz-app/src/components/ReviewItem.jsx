import { isCorrect } from '../lib/grade'

// 오답노트 한 줄. 문제 + 내가 쓴 답 + 정답 + 해설을 보여줍니다.
function ReviewItem({ question, userAnswer, number }) {
  const correct = isCorrect(question, userAnswer)

  return (
    <li className={correct ? 'card review-item ok' : 'card review-item no'}>
      <div className="review-head">
        <span className={correct ? 'review-mark ok' : 'review-mark no'}>
          {correct ? '정답' : '오답'}
        </span>
        <p className="review-question">
          {number}. {question.question}
        </p>
      </div>

      <div className="review-body">
        <p>
          <span className="label">내 답</span>
          <span className={correct ? 'answer ok' : 'answer no'}>
            {/* 답을 안 쓴 문제도 있을 수 있습니다 */}
            {userAnswer ? userAnswer : '(입력 안 함)'}
          </span>
        </p>

        {/* 틀렸을 때만 정답을 보여줍니다 (ch11 조건부 렌더링 && ) */}
        {!correct && (
          <p>
            <span className="label">정답</span>
            <span className="answer ok">{question.answers[0]}</span>
          </p>
        )}

        <p className="explanation">{question.explanation}</p>
      </div>
    </li>
  )
}

export default ReviewItem
