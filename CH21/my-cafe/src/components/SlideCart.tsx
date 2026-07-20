import type { MenuItem } from '../types';
import Cart from '../pages/Cart';

interface SlideCartlProps{
    product : MenuItem;
    isOpen: boolean;
    onClose: () => void;
}

export default function SlideCart({ isOpen, onClose, product } : SlideCartlProps) {

  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`}  onClick={onClose}  />

      <aside className={`slide-panel ${isOpen ? 'active' : ''}`}>
        <div className="panel-header">
          <h2 className='product-englishName'>CART</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="panel-content">    
           <Cart onClose={onClose}/>
        </div>
      </aside>
    </>
  );
};

