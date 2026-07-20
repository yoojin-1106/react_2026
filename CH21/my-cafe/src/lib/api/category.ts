import type { Category } from '../../types'
import { MENU } from '../../data/cafeDB'
import { delay } from './client'

export async function getCategorys(): Promise<Category[]> {
  await delay(400) 
  return MENU
}

export async function getCategory(category: string): Promise<Category | null> {
  await delay(300)
  return MENU.find((p) => p.category === category) ?? null
} 