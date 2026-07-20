import { useState } from 'react';
import { menuData } from '../data/cafeDB';

// 중복 제거된 카테고리 배열 생성 
const categories = ['all', ...Array.from(new Set(menuData.map((item) => item.category)))];

export default function MenuTabLayout() {
  // 현재 활성화된 카테고리 상태 (기본값: 'all')
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // 현재 선택된 카테고리에 해당하는 메뉴만 필터링
  const filteredProducts = activeCategory === 'all' ? menuData : menuData.filter((item) => item.category === activeCategory);

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className='product-image' />
              <h3 className='product-name'>{product.name}</h3>
              <p className='product-englishName'>{product.englishName}</p>
              <p className='product-price'>가격: {product.price.toLocaleString()}원</p>
              <p className='product-info'>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

