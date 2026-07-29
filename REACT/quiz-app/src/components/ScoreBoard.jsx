import { getComment } from '../lib/grade'

// 결과 페이지 위쪽의 점수판입니다.
// score 는 lib/grade.js 의 grade() 가 돌려준 객체: { total, correct, wrong, score }
function ScoreBoard({ score }) {
  return (
    <div className="card score-board">
      {/* 점수만큼 원을 채웁니다. CSS 변수(--percent)로 값을 넘겨줍니다. */}
      <div className="score-ring" style={{ '--percent': `${score.score}%` }}>
        <div className="score-ring-inner">
          <strong>{score.score}</strong>
          <span>점</span>
        </div>
      </div>

      <div className="score-detail">
        <p className="score-comment">{getComment(score.score)}</p>
        <div className="score-stats">
          <span className="stat ok">맞은 문제 {score.correct}개</span>
          <span className="stat no">틀린 문제 {score.wrong}개</span>
          <span className="stat">전체 {score.total}문제</span>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
