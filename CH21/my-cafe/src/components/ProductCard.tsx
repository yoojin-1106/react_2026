import { formatPrice } from '../lib/format';
import type { MenuItem } from '../types';
import { useState } from 'react';
import SlidePanel from './SlidePanel';

interface ProductCardProps{
    product : MenuItem
}

export default function ProductCard({product} : ProductCardProps){
    // 슬라이드 열림/닫힘 상태 관리
    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

    // 패널 열기 함수
    const handleOpenPanel = () => {
        if(product.isAvailable){
            setIsPanelOpen(true);
        }else{
            alert("죄송합니다, 품절된 상품입니다.");
            return;
        }
    };

    // 패널 닫기 함수
    const handleClosePanel = () => {
        setIsPanelOpen(false);
    };

    return (
        <div>
            <div className={product.isAvailable === true ? "product-card" : "product-card disabled"} onClick={handleOpenPanel}>
                  <img src={product.image} alt={product.name} className='product-image' />
                  <h3 className='product-name'>{product.name}</h3>
                  <p className='product-englishName'>{product.englishName}</p>
                  <p className='product-price'>{formatPrice(product.price)}</p>
                  <span className='product-info' title={product.description}>
                    {product.description.length <= 50 ? 
                      product.description : product.description.substring(0, 50)+"..."}
                  </span>
            </div>
            <SlidePanel isOpen={isPanelOpen} onClose={handleClosePanel} product={product} />
        </div>
    )

}
