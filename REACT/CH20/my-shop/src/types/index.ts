export type {Product, Category} from './product'
export {CATEGORY_LABELS} from './product'
export type {CartItem, CartState, CartAction} from './cart'
export type { Order, OrderStatus, ShippingInfo } from './order'
export { ORDER_STATUS_LABELS } from './order'
export type {User} from './user'


/* 
    타입 파일이 한개가 아니기 때문에 여기서 모든 타입을 정의
    import ... from '.../types' -> index.ts
    각각 export 하는 이유는 각각을 꺼내 쓰기 위해서이다.
*/