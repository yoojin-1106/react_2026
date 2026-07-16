// 상품 데이터를 가져오는 곳. 화면은 여기 함수만 부르고, 출처(mock/실서버)는 신경 쓰지 않습니다.
import type { Category } from '../../types'
import { MENU } from '../../data/cafeDB'
import { delay } from './client'

export async function getCategorys(): Promise<Category[]> {
  await delay(400) // 실제 네트워크처럼 잠깐 기다립니다
  return MENU
}

export async function getCategory(category: string): Promise<Category | null> {
  await delay(300)
  return MENU.find((p) => p.category === category) ?? null
}