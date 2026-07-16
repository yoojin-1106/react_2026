// 상품 데이터를 가져오는 곳. 화면은 여기 함수만 부르고, 출처(mock/실서버)는 신경 쓰지 않습니다.
import { delay } from './client'
import type { Menu } from '../../types'
import { MENU } from '../../data/cafeDB'

export async function getMenus(): Promise<Menu[]> {
  await delay(400) // 실제 네트워크처럼 잠깐 기다립니다
  return MENU
}

export async function getMenu(id: number): Promise<Menu | null> {
  await delay(300)
  return MENU.find((p) => p.id === id) ?? null
}