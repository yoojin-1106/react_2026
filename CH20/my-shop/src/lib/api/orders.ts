// 주문 데이터를 다루는 곳. mock 이라 메모리에 쌓아 두고, 새로고침하면 사라집니다.
import type { CartItem, Order, ShippingInfo } from '../../types'
import { delay } from './client'

const orders: Order[] = []
let seq = 1

export interface CreateOrderInput {
  items: CartItem[]
  shipping: ShippingInfo
  total: number
}

export async function createOrder(input: CreateOrderInput): Promise<Order> {
  await delay(500)
  const order: Order = {
    id: `o${String(seq).padStart(4, '0')}`,
    items: input.items,
    total: input.total,
    status: 'paid', // mock 결제는 바로 결제 완료로 처리합니다
    shipping: input.shipping,
    createdAt: new Date().toISOString(),
  }
  seq += 1
  orders.unshift(order)
  return order
}

export async function getOrders(): Promise<Order[]> {
  await delay(300)
  return orders
}

export async function getOrder(id: string): Promise<Order | null> {
  await delay(300)
  return orders.find((o) => o.id === id) ?? null
}