//import { clearToken, getToken } from '../auth/token'

// 로딩 화면을 보여 주려고 일부러 잠깐 기다립니다(mock 용).
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// 제네릭 fetch 래퍼 — 저장된 JWT가 있으면 Authorization 헤더에 실습니다.
// 이 쇼핑몰은 기본적으로 mock 으로 동작하지만, 실제 백엔드에 붙일 땐 이 함수를 씁니다.
export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers)
 // const token = getToken()
  //if (token) {
  //  headers.set('Authorization', `Bearer ${token}`)
  //}

  const res = await fetch(url, { ...init, headers })
  if (res.status === 401) {
   // clearToken()
  }
  if (!res.ok) {
    throw new Error(`요청이 실패했습니다 (${res.status})`)
  }
  // 주의: as T 는 서버 응답을 검증 없이 그 타입이라고 '가정'하는 것입니다.
  // 실서비스에선 응답 모양을 검증하는 게 안전합니다(11장 경계 검증 참고).
  return (await res.json()) as T
}