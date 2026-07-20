import { useState } from 'react';
import { menuData } from '../data/cafeDB';
import ProductCard from './ProductCard';

// 중복 제거된 카테고리 배열 생성 
const categories = ['추천음료', ...Array.from(new Set(menuData.map((item) => item.category)))];

export default function MenuTabLayout() {
  // 현재 활성화된 카테고리 상태 (기본값: '추천음료')
  const [activeCategory, setActiveCategory] = useState<string>('추천음료');

  // 현재 선택된 카테고리에 해당하는 메뉴만 필터링
  const filteredProducts = activeCategory === '추천음료' ? menuData.filter((item) => item.recommend ) : menuData.filter((item) => item.category === activeCategory);


  return (
    <div className="menu-section">
      <ul className="tab-menu" role="tablist">
        {categories.map((category) => (
          <li key={category} className='tab-item'>
            <button onClick={() => setActiveCategory(category)} className='tab-button' >
              {category.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" >
        <div className='product-grid'>
          {filteredProducts.map((product) => 
            <ProductCard key={product.id} product={product} />
          )}
        </div>
      </div>
    </div>
  );
}
///`product-card {product.isAvailable === true ? "disabled" : "" }`
