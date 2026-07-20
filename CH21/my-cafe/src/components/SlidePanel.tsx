import type { MenuItem } from '../types';
import MenuOption from './MenuOption';

interface SlidePanelProps{
    product : MenuItem;
    isOpen: boolean;
    onClose: () => void;
}

export default function SlidePanel({ isOpen, onClose, product } : SlidePanelProps) {

  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`}  onClick={onClose}  />

      <aside className={`slide-panel ${isOpen ? 'active' : ''}`}>
        <div className="panel-header">
          <h2 className='product-englishName'>OPTION</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="panel-content">    
            <MenuOption product={product} key={product.id}/>
        </div>
      </aside>
    </>
  );
};

