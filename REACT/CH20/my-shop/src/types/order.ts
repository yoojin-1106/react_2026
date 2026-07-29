// 주문 도메인 타입.
import type { CartItem } from './cart'

// 주문 상태 — 리터럴 유니온으로 표현한 상태 머신.
export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: '결제 대기',
  paid: '결제 완료',
  shipped: '배송 중',
  delivered: '배송 완료',
  cancelled: '취소됨',
}

// 배송 정보(결제 폼에서 입력받는 값). memo 는 선택값입니다.
export interface ShippingInfo {
  recipient: string
  phone: string
  zipcode: string
  address: string
  memo?: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: OrderStatus
  shipping: ShippingInfo
  createdAt: string // ISO 문자열
}