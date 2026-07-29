// 주관식(단답형) 입력칸입니다.
// value 와 onChange 를 부모가 쥐고 있는 "제어 컴포넌트" 입니다. (ch11)
function ShortAnswerInput({ value, onChange }) {
  return (
    <div className="short-answer">
      <input
        type="text"
        placeholder="정답을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="hint">※ 대소문자와 앞뒤 공백은 채점할 때 무시합니다.</p>
    </div>
  )
}

export default ShortAnswerInput
