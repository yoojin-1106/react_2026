// 진행 상황 막대. 3 / 10 이면 30% 만큼 채웁니다.
function ProgressBar({ current, total }) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100)

  return (
    <div className="progress">
      <div className="progress-info">
        <span>
          <strong>{current}</strong> / {total}
        </span>
        <span className="muted">{percent}%</span>
      </div>

      <div className="progress-track">
        {/* 계산한 값을 style 로 넘길 때는 중괄호 2개: style={{ ... }} */}
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
