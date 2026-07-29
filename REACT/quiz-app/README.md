# ch20 — 퀴즈 앱 (React 종합 실습)

ch10 ~ ch17 에서 배운 것**만** 사용해서 만드는 퀴즈 앱입니다.
새로운 개념은 하나도 없습니다. 배운 걸 조립하는 연습입니다.

```bash
npm install
npm run dev     # http://localhost:5173
```

---

## 1. 무엇을 만드나요?

| 주소 | 화면 | 하는 일 |
|---|---|---|
| `/` | 홈 | 퀴즈 카테고리 고르기 |
| `/quiz/:categoryId` | 문제 풀기 | 한 번에 한 문제씩, 이전/다음 |
| `/result` | 결과 | 점수 + 오답노트 |
| `/admin` | 문제 관리 | 문제 추가 / 수정 / 삭제 |

---

## 2. 문제는 어떻게 생겼나요?

문제 한 개는 **모양이 똑같은 객체**입니다. `type` 만 다릅니다.

```js
// 객관식 (4지선다)
{
  id: 1,
  categoryId: 'react',
  type: 'single',
  question: '부모가 자식에게 값을 내려줄 때 쓰는 것은?',
  choices: ['state', 'props', 'ref', 'context'],   // 보기 4개
  answers: ['props'],                              // 정답 (항상 배열!)
  explanation: 'props 는 부모 → 자식 한 방향입니다.',
}

// 주관식 (단답형)
{
  id: 7,
  categoryId: 'react',
  type: 'short',
  question: 'map 으로 리스트를 그릴 때 꼭 넣어야 하는 prop 은?',
  choices: [],                                     // 보기 없음
  answers: ['key'],                                // 정답을 여러 개 인정 가능
  explanation: 'key 로 항목을 구분합니다.',
}
```

### 왜 `answers` 가 배열인가요?

**채점 함수를 하나로 통일하기 위해서**입니다. 객관식이든 주관식이든 규칙이 똑같습니다:

> "정답 목록 안에 사용자의 답이 들어있나?"

```js
// src/lib/grade.js
export function isCorrect(question, userAnswer) {
  const answers = question.answers.map(normalize)  // ['props']
  return answers.includes(normalize(userAnswer))
}
```

`normalize` 는 앞뒤 공백을 없애고 소문자로 바꿉니다. 그래서 주관식에 ` Key ` 라고 써도 정답입니다.

> **OX 문제는 어떻게 만드나요?**
> 새 타입을 만들 필요가 없습니다. **보기가 2개인 객관식**으로 만드세요.
> `choices: ['O', 'X'], answers: ['O']` — 코드는 한 줄도 안 고쳐집니다.

---

## 3. 문제 관리는 어떻게 하나요?

서버(백엔드)를 아직 안 배웠으므로, **브라우저의 localStorage** 를 데이터베이스처럼 씁니다.

```
src/data/questions.js       기본 문제 15개 (앱을 처음 열 때의 초기값)
        ↓
src/context/QuestionsContext.jsx   문제 은행을 앱 전체가 공유 (ch15 Context)
        ↓  useLocalStorage 로 저장 (ch15)
브라우저 localStorage        추가/수정/삭제한 내용이 여기 남습니다
```

`/admin` 화면에서 문제를 추가하면 브라우저에 저장되고, 새로고침해도 남아 있습니다.
망가뜨렸으면 **[기본 문제로 초기화]** 버튼을 누르세요.

> **나중에 서버를 배우면?**
> `QuestionsContext` 안의 `useLocalStorage` 를 `fetch` 로 바꾸기만 하면 됩니다.
> **화면 컴포넌트는 한 줄도 안 고쳐집니다.** 이게 ch17 에서 `api / hooks / components` 를
> 나눠서 만든 이유입니다.

---

## 4. 폴더 구조

```
src/
  data/questions.js          문제 은행 (기본 데이터 + 도우미 함수)
  lib/grade.js               채점 함수 (React 없는 순수 자바스크립트)

  hooks/
    useLocalStorage.js       ch15 에서 만든 것 그대로
    useQuiz.js               퀴즈 푸는 동안의 상태 (몇 번 문제? 무슨 답 골랐나?)

  context/
    QuestionsContext.jsx     문제 은행 공유 + 추가/수정/삭제
    ResultContext.jsx        채점 결과를 /quiz → /result 로 전달

  components/
    Navbar.jsx               상단 메뉴
    CategoryCard.jsx         홈의 카테고리 카드
    ProgressBar.jsx          3 / 10 진행바
    QuestionCard.jsx         문제 1개 (type 에 따라 아래 둘 중 하나를 끼움)  <- 핵심
    ChoiceList.jsx             └ 객관식 보기 4개
    ShortAnswerInput.jsx       └ 주관식 입력칸
    ScoreBoard.jsx           결과 점수판
    ReviewItem.jsx           오답노트 한 줄
    QuestionForm.jsx         문제 추가/수정 폼 (ch17 PostForm 과 같은 구조)
    QuestionItem.jsx         관리 목록 한 줄  (ch17 PostItem 과 같은 구조)

  pages/
    Home.jsx  Quiz.jsx  Result.jsx  Admin.jsx  NotFound.jsx

  App.jsx                    주소 ↔ 페이지 연결 (ch16 Routes)
  main.jsx                   Provider 로 감싸기
  index.css                  스타일 (화면 순서대로 정리해둠)
```

---

## 5. 핵심 아이디어 3개

### ① 답은 "객체 하나"에 모읍니다

```js
// src/hooks/useQuiz.js
const [answers, setAnswers] = useState({})   // { 1: 'const', 3: 'reduce' }

function select(questionId, value) {
  setAnswers((prev) => ({
    ...prev,              // 이전 답들은 그대로 두고 (ch06 스프레드)
    [questionId]: value,  // 이 문제의 답만 덮어쓰기
  }))
}
```

이렇게 하면 **이전 문제로 돌아가도 골랐던 답이 그대로 남아있습니다.** 공짜로 얻는 기능입니다.

### ② 타입 분기는 딱 한 곳에서만

```jsx
// src/components/QuestionCard.jsx
{isSingle ? (
  <ChoiceList choices={question.choices} selected={selected} onSelect={onSelect} />
) : (
  <ShortAnswerInput value={selected} onChange={onSelect} />
)}
```

문제 타입이 늘어나도 **이 파일 하나만** 고치면 됩니다.

### ③ 페이지 사이의 값 전달은 Context 로

`/quiz` 에서 채점한 결과를 `/result` 에서 보여줘야 하는데,
페이지가 다르면 props 로 넘길 수 없습니다. → **ResultContext** (ch15)

---

## 6. 직접 해보기 (연습 문제)

- [ ] **쉬움** — 문제 은행에 OX 문제를 추가해보세요. (`choices: ['O', 'X']`)
- [ ] **쉬움** — 점수 한 줄 평(`lib/grade.js` 의 `getComment`)을 내 마음대로 바꿔보세요.
- [ ] **보통** — 결과 화면에서 **틀린 문제만** 보여주는 필터 버튼을 만들어보세요. (`filter`)
- [ ] **보통** — 최고 점수를 `useLocalStorage` 로 저장해서 홈에 보여주세요.
- [ ] **보통** — 문제 순서를 매번 섞어주세요. (배열 셔플)
- [ ] **어려움** — 제한 시간 30초 타이머를 붙이고, 0초가 되면 자동 제출하세요. (`useEffect` + `setInterval`)
- [ ] **어려움** — 답을 고르는 즉시 정답/오답을 알려주는 "연습 모드"를 만들어보세요.

---

## 7. 배운 것과의 연결

| 이 앱의 코드 | 어디서 배웠나 |
|---|---|
| `questions.filter(...)`, `.map(...)`, `.includes(...)` | ch04, ch05 |
| `{ ...prev, [id]: value }` | ch06 |
| `useState`, 제어 컴포넌트(input) | ch11 |
| 목록 추가/수정/삭제 (불변 업데이트) | ch12 |
| `useEffect` 로 폼 채우기 | ch13 |
| 상태 끌어올리기 (자식은 함수만 호출) | ch14 |
| 커스텀 훅 `useQuiz`, `useLocalStorage` | ch15 |
| Context (`QuestionsContext`, `ResultContext`) | ch15 |
| `Routes`, `Link`, `useParams`, `useNavigate` | ch16 |
| 폼 + 목록 CRUD 구조 (`QuestionForm` / `QuestionItem`) | ch17 |
