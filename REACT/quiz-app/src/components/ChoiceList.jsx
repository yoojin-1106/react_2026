// 객관식(4지선다) 보기 목록입니다.
// 스스로 답을 기억하지 않습니다. 부모가 준 selected 를 보고 그리고,
// 클릭하면 부모가 준 onSelect 함수를 부를 뿐입니다. (ch14 상태 끌어올리기)
function ChoiceList({ choices, selected, onSelect }) {
  return (
    <ul className="choice-list">
      {choices.map((choice, i) => {
        const isSelected = selected === choice

        return (
          <li key={choice}>
            <button
              type="button"
              className={isSelected ? 'choice selected' : 'choice'}
              onClick={() => onSelect(choice)}
            >
              {/* 0,1,2,3 -> 1,2,3,4 번호로 보여주기 */}
              <span className="choice-num">{i + 1}</span>
              <span className="choice-text">{choice}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ChoiceList
