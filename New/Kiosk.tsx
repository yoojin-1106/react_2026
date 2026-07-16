export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'coffee' | 'tea' | 'ade' | 'dessert';
  image: string;
}

export interface CartItem {
  id: string; // 상품ID + 옵션 조합으로 고유 ID 생성
  product: Product;
  quantity: number;
  option: 'HOT' | 'ICE';
}

const CATEGORIES = [
  { id: 'coffee', name: '☕ 커피' },
  { id: 'tea', name: '🍵 티' },
  { id: 'ade', name: '🍹 에이드' },
  { id: 'dessert', name: '🍰 디저트' },
] as const;

const PRODUCTS: Product[] = [
  { id: 1, name: '아메리카노', price: 3000, category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300' },
  { id: 2, name: '카페라떼', price: 3500, category: 'coffee', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=300' },
  { id: 3, name: '자몽에이드', price: 4500, category: 'ade', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300' },
  { id: 4, name: '말차라떼', price: 4000, category: 'tea', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300' },
  { id: 5, name: '초코칩 쿠키', price: 2500, category: 'dessert', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300' },
  { id: 6, name: '치즈 케이크', price: 5500, category: 'dessert', image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=300' },
];