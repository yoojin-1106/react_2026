import { delay } from './client'
import type { Menu } from '../../types'
import { MENU } from '../../data/cafeDB'

export async function getMenus(): Promise<Menu[]> {
  await delay(400) 
  return MENU
}

export async function getMenu(id: number): Promise<Menu | null> {
  await delay(300)
  return MENU.find((p) => p.id === id) ?? null
}