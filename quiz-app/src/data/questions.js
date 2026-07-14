// 문제 은행(question bank)
// ch16의 data/products.js 와 같은 자리입니다. 서버 없이 여기 배열이 "데이터베이스" 역할을 합니다.

// 1) 퀴즈 종류(카테고리)
export const categories = [
  {
    id: 'javascript',
    name: '자바스크립트 기초',
    desc: '변수, 배열, 함수, 비동기',
  },
  {
    id: 'react',
    name: '리액트 기초',
    desc: '컴포넌트, props, 리스트 렌더링',
  },
  {
    id: 'hook',
    name: '리액트 훅',
    desc: 'useState, useEffect, 커스텀 훅',
  },
]

// 2) 문제 목록
// 문제 한 개는 "모양이 똑같은 객체" 입니다. 타입만 다릅니다.
//   type: 'single' -> 객관식(보기 중 하나 고르기).  choices 에 보기 4개
//   type: 'short'  -> 주관식(직접 입력).            choices 는 빈 배열 []
//   answers        -> 정답 목록. 항상 배열! (주관식은 정답을 여러 개 인정할 수 있음)
export const questions = [
  {
    id: 1,
    categoryId: 'javascript',
    type: 'single',
    question: '값이 바뀌지 않는 변수를 선언할 때 쓰는 키워드는?',
    choices: ['var', 'let', 'const', 'static'],
    answers: ['const'],
    explanation: 'const 는 한 번 담은 값을 다시 대입할 수 없습니다.',
  },
  {
    id: 2,
    categoryId: 'javascript',
    type: 'single',
    question: '배열에서 조건에 맞는 항목만 골라 "새 배열"을 만드는 메서드는?',
    choices: ['forEach', 'filter', 'reduce', 'push'],
    answers: ['filter'],
    explanation: 'filter 는 조건이 true 인 항목만 모아 새 배열을 돌려줍니다.',
  },
  {
    id: 3,
    categoryId: 'javascript',
    type: 'short',
    question: '배열의 모든 값을 하나의 값(합계 등)으로 접는 메서드 이름은?',
    choices: [],
    answers: ['reduce'],
    explanation: 'reduce 는 누적값(acc)을 굴리면서 최종 결과 하나를 만듭니다.',
  },
  {
    id: 4,
    categoryId: 'javascript',
    type: 'single',
    question: 'async 함수 안에서 Promise 의 결과를 기다릴 때 쓰는 키워드는?',
    choices: ['wait', 'await', 'then', 'yield'],
    answers: ['await'],
    explanation: 'await 는 Promise 가 끝날 때까지 기다렸다가 결과값을 꺼내줍니다.',
  },
  {
    id: 5,
    categoryId: 'javascript',
    type: 'single',
    question: '객체를 복사하면서 일부만 바꿀 때 쓰는 문법은? { ...user, name: "홍길동" }',
    choices: ['전개 구문(스프레드)', '구조 분해', '옵셔널 체이닝', '템플릿 리터럴'],
    answers: ['전개 구문(스프레드)'],
    explanation: '... 은 기존 값을 펼쳐 담고, 뒤에 쓴 키가 덮어씁니다.',
  },

  {
    id: 6,
    categoryId: 'react',
    type: 'single',
    question: '부모가 자식 컴포넌트에게 값을 내려줄 때 쓰는 것은?',
    choices: ['state', 'props', 'ref', 'context'],
    answers: ['props'],
    explanation: 'props 는 부모 → 자식 한 방향으로 전달되는 값입니다.',
  },
  {
    id: 7,
    categoryId: 'react',
    type: 'short',
    question: 'map 으로 리스트를 그릴 때 각 항목에 꼭 넣어야 하는 prop 은?',
    choices: [],
    answers: ['key'],
    explanation: 'key 로 React 가 어떤 항목이 추가/삭제됐는지 구분합니다.',
  },
  {
    id: 8,
    categoryId: 'react',
    type: 'single',
    question: 'JSX 에서 class 대신 써야 하는 속성 이름은?',
    choices: ['class', 'className', 'styleName', 'cssClass'],
    answers: ['className'],
    explanation: 'class 는 자바스크립트 예약어라서 className 을 씁니다.',
  },
  {
    id: 9,
    categoryId: 'react',
    type: 'single',
    question: '컴포넌트 이름은 어떻게 시작해야 할까요?',
    choices: ['소문자', '대문자', '숫자', '언더바'],
    answers: ['대문자'],
    explanation: '소문자로 시작하면 React 가 <div> 같은 HTML 태그로 봅니다.',
  },
  {
    id: 10,
    categoryId: 'react',
    type: 'single',
    question: '자식이 부모의 상태를 바꾸고 싶을 때 올바른 방법은?',
    choices: [
      '자식이 부모 state 를 직접 수정한다',
      '부모가 내려준 함수를 자식이 호출한다',
      '자식이 새 state 를 만든다',
      '불가능하다',
    ],
    answers: ['부모가 내려준 함수를 자식이 호출한다'],
    explanation: '상태는 부모에 두고(끌어올리기), 자식은 받은 함수만 호출합니다.',
  },

  {
    id: 11,
    categoryId: 'hook',
    type: 'short',
    question: '화면에서 변하는 값을 기억할 때 쓰는 Hook 이름은?',
    choices: [],
    answers: ['useState'],
    explanation: 'useState 로 만든 값이 바뀌면 컴포넌트가 다시 그려집니다.',
  },
  {
    id: 12,
    categoryId: 'hook',
    type: 'single',
    question: 'API 호출처럼 "화면 그리기와 상관없는 일"을 처리하는 Hook 은?',
    choices: ['useState', 'useEffect', 'useRef', 'useContext'],
    answers: ['useEffect'],
    explanation: 'useEffect 는 렌더링이 끝난 뒤에 실행됩니다.',
  },
  {
    id: 13,
    categoryId: 'hook',
    type: 'single',
    question: 'useEffect(fn, []) 처럼 의존성 배열이 빈 배열이면 언제 실행될까요?',
    choices: ['매번', '처음 한 번만', '실행되지 않음', '값이 바뀔 때마다'],
    answers: ['처음 한 번만'],
    explanation: '빈 배열은 "지켜볼 값이 없다"는 뜻이라 첫 렌더 후 한 번만 실행됩니다.',
  },
  {
    id: 14,
    categoryId: 'hook',
    type: 'single',
    question: 'props 로 계속 넘기지 않고 멀리 떨어진 컴포넌트끼리 값을 공유하는 방법은?',
    choices: ['Context', 'localStorage', 'CSS 변수', 'import'],
    answers: ['Context'],
    explanation: 'Provider 로 감싸면 그 안의 어떤 컴포넌트든 useContext 로 값을 꺼냅니다.',
  },
  {
    id: 15,
    categoryId: 'hook',
    type: 'short',
    question: '여러 컴포넌트에서 반복되는 상태 로직을 모아둔 함수를 무엇이라 부를까요? (O O O)',
    choices: [],
    answers: ['커스텀 훅', '커스텀훅', 'custom hook', 'customhook'],
    explanation: 'use 로 시작하는 이름을 가진 평범한 함수입니다.',
  },
]

// 3) 데이터를 꺼내 쓰는 도우미 함수 (ch16 findProductById 와 같은 역할)
// 주의: questions 를 "인자로 받습니다". 관리자 화면에서 문제가 추가/수정되면
//       import 한 원본이 아니라 "지금 화면이 들고 있는 목록"으로 계산해야 하기 때문입니다.
export function findCategory(categoryId) {
  return categories.find((c) => c.id === categoryId)
}

export function getQuestionsByCategory(allQuestions, categoryId) {
  return allQuestions.filter((q) => q.categoryId === categoryId)
}
