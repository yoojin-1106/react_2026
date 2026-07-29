// 목(mock) 상품 데이터. 타입을 Product[] 로 못 박아 두면,
// 오타나 빠진 필드를 컴파일러가 즉시 잡아 줍니다.
import type { Product } from '../types/product'

export const PRODUCTS: Product[] = [
  { id: 'p01', name: '무선 노이즈캔슬링 헤드폰', description: '깊은 저음과 긴 배터리. 하루 종일 끼고 있어도 편한 무게.', price: 219000, category: 'electronics', image: 'https://picsum.photos/seed/p01/480/360', stock: 12, rating: 4.6 },
  { id: 'p02', name: '기계식 키보드 (적축)', description: '경쾌한 타건감의 텐키리스. 백라이트 조절 가능.', price: 89000, category: 'electronics', image: 'https://picsum.photos/seed/p02/480/360', stock: 30, rating: 4.4 },
  { id: 'p03', name: '스마트 워치 5', description: '심박·수면·운동 측정. GPS 내장 모델.', price: 159000, category: 'electronics', image: 'https://picsum.photos/seed/p03/480/360', stock: 0, rating: 4.2 },
  { id: 'p04', name: '코튼 오버핏 후드티', description: '도톰한 기모 안감. 데일리로 입기 좋은 무지 디자인.', price: 39000, category: 'fashion', image: 'https://picsum.photos/seed/p04/480/360', stock: 50, rating: 4.5 },
  { id: 'p05', name: '레더 크로스백', description: '가벼운 천연 소가죽. 노트북 빼고 다 들어가는 수납.', price: 78000, category: 'fashion', image: 'https://picsum.photos/seed/p05/480/360', stock: 8, rating: 4.3 },
  { id: 'p06', name: '러닝화 클라우드핏', description: '반발력 좋은 미드솔. 장거리 러닝에 추천.', price: 112000, category: 'fashion', image: 'https://picsum.photos/seed/p06/480/360', stock: 20, rating: 4.7 },
  { id: 'p07', name: '아로마 디퓨저', description: '은은한 무드등 겸용. 6시간 자동 꺼짐 타이머.', price: 32000, category: 'home', image: 'https://picsum.photos/seed/p07/480/360', stock: 40, rating: 4.1 },
  { id: 'p08', name: '북유럽풍 원목 스툴', description: '튼튼한 원목 다리. 화분 받침이나 보조 의자로.', price: 45000, category: 'home', image: 'https://picsum.photos/seed/p08/480/360', stock: 15, rating: 4.0 },
  { id: 'p09', name: '타입스크립트 프로그래밍', description: '타입 시스템을 깊이 있게 다루는 입문서.', price: 32000, category: 'book', image: 'https://picsum.photos/seed/p09/480/360', stock: 100, rating: 4.8 },
  { id: 'p10', name: '리팩터링 2판', description: '코드를 안전하게 다듬는 기술. 예제는 자바스크립트.', price: 36000, category: 'book', image: 'https://picsum.photos/seed/p10/480/360', stock: 25, rating: 4.9 },
  { id: 'p11', name: '핸드드립 원두 1kg', description: '갓 볶은 미디엄 로스트. 균형 잡힌 산미와 단맛.', price: 28000, category: 'food', image: 'https://picsum.photos/seed/p11/480/360', stock: 60, rating: 4.5 },
  { id: 'p12', name: '유기농 견과 믹스', description: '구운 아몬드·호두·캐슈. 하루 한 봉지 개별 포장.', price: 19000, category: 'food', image: 'https://picsum.photos/seed/p12/480/360', stock: 0, rating: 4.2 },
]
