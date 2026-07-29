// 상품 데이터를 가져오는 곳. 화면은 여기 함수만 부르고, 출처(mock/실서버)는 신경 쓰지 않습니다.
import type { Product } from '../../types'
import { PRODUCTS } from '../../data/products'
import { delay } from './client'

export async function getProducts(): Promise<Product[]> {
  await delay(400) // 실제 네트워크처럼 잠깐 기다립니다
  return PRODUCTS
}

export async function getProduct(id: string): Promise<Product | null> {
  await delay(300)
  return PRODUCTS.find((p) => p.id === id) ?? null
}