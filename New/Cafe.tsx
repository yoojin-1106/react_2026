import React, { useState } from 'react';
import './Kiosk.css'; // 아래 CSS 코드를 저장해 주세요.

export default function Kiosk() {
  const [activeCategory, setActiveCategory] = useState<string>('coffee');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedOption, setSelectedOption] = useState<'HOT' | 'ICE'>('ICE');
  const [modalQuantity, setModalQuantity] = useState<number>(1);

  // 카테고리 필터링된 상품 목록
  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  // 장바구니 담기 (옵션 포함)
  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const cartItemId = `${selectedProduct.id}-${selectedOption}`;
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === cartItemId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + modalQuantity }
            : item
        );
      }
      return [...prevCart, { id: cartItemId, product: selectedProduct, quantity: modalQuantity, option: selectedOption }];
    });

    // 모달 초기화 및 닫기
    setSelectedProduct(null);
    setModalQuantity(1);
    setSelectedOption('ICE');
  };

  // 장바구니 수량 변경 (+/-)
  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prevCart =>
      prevCart
        .map(item => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // 총 금액 계산
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="kiosk-container">
      {/* 왼쪽 영역: 상품 선택 */}
      <main className="menu-section">
        <header className="kiosk-header">
          <h1>🍊 ORANGE CAFE</h1>
        </header>

        {/* 탭 레이아웃 */}
        <nav className="tab-layout">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              className={`tab-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </nav>

        {/* 상품 그리드 */}
        <section className="product-grid">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* 오른쪽 영역: 장바구니 */}
      <aside className="cart-section">
        <h2>주문 담은 목록 ({cart.length})</h2>
        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="empty-cart">선택한 상품이 없습니다.</div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.product.name}</span>
                  <span className={`cart-item-option ${item.option.toLowerCase()}`}>
                    {item.option}
                  </span>
                  <div className="cart-item-price">
                    {(item.product.price * item.quantity).toLocaleString()}원
                  </div>
                </div>
                {/* 수량 조절 버튼 */}
                <div className="quantity-control">
                  <button onClick={() => updateCartQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 주문 금액 & 결제 버튼 */}
        <div className="cart-footer">
          <div className="total-price-row">
            <span>총 결제금액</span>
            <span className="total-price">{totalPrice.toLocaleString()}원</span>
          </div>
          <button 
            className="payment-button" 
            onClick={() => cart.length > 0 && alert('결제가 완료되었습니다! 🍊')}
            disabled={cart.length === 0}
          >
            결제하기
          </button>
        </div>
      </aside>

      {/* 상품 상세 및 옵션 선택 모달 */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h2>{selectedProduct.name}</h2>
            <p className="modal-price">{selectedProduct.price.toLocaleString()}원</p>

            {/* 디저트가 아닐 경우에만 HOT/ICE 옵션 노출 */}
            {selectedProduct.category !== 'dessert' && (
              <div className="option-section">
                <h4>온도 선택</h4>
                <div className="option-buttons">
                  <button 
                    className={`option-btn hot ${selectedOption === 'HOT' ? 'active' : ''}`}
                    onClick={() => setSelectedOption('HOT')}
                  >
                    HOT ♨
                  </button>
                  <button 
                    className={`option-btn ice ${selectedOption === 'ICE' ? 'active' : ''}`}
                    onClick={() => setSelectedOption('ICE')}
                  >
                    ICE ❄
                  </button>
                </div>
              </div>
            )}

            {/* 수량 선택 */}
            <div className="option-section">
              <h4>수량 선택</h4>
              <div className="quantity-control large">
                <button onClick={() => setModalQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{modalQuantity}</span>
                <button onClick={() => setModalQuantity(q => q + 1)}>+</button>
              </div>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              {(selectedProduct.price * modalQuantity).toLocaleString()}원 담기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}