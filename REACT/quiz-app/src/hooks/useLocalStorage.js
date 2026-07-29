import { useState, useEffect } from 'react'

// ch15 에서 만든 훅을 그대로 가져왔습니다.
// 브라우저를 껐다 켜도 값이 남아있게 해줍니다. (여기서는 "문제 은행" 저장용)
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key) // 저장된 값은 항상 "문자열"
    return saved !== null ? JSON.parse(saved) : initialValue
  })

  useEffect(() => {
    // 객체/배열은 그대로 못 넣으므로 문자열(JSON)로 바꿔서 저장
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
