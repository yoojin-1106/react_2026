import { delay } from './client'
import type { MenuItem } from '../../types'
import { menuData } from '../../data/cafeDB'

export async function getMenus(): Promise<MenuItem[]> {
  await delay(400) 
  return menuData
}

export async function getMenu(id: number): Promise<MenuItem | null> {
  await delay(300)
  return menuData.find((p) => p.id === id) ?? null
}