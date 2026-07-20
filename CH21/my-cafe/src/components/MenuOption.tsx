import type { MenuItem } from '../types';
import { useCart } from "../hooks/useCart";
import SlideCart from './SlideCart';
import { useState } from 'react';


interface MenuOptionProps {
  product : MenuItem
  onClose: () => void;
}

export default function MenuOption({ product, onClose } : MenuOptionProps) {

    const { addItem } = useCart(); 
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // 패널 열기 함수
    const handleOpen = () => {
        setIsOpen(true);
    };

    // 패널 닫기 함수
    const handleClose = () => {
        setIsOpen(false);
    };

    let optionButtons;

    if (product.options.length > 1) {
      optionButtons = (
        <div className='toggle-group'>
          <button type='button' className="toggle-btn hot" onClick={() => {}}>
            {product.options[0]}
          </button>
          <button type='button' className="toggle-btn ice" onClick={() => {}}>
            {product.options[1]}
          </button> 
        </div>
      );
    } else if(product.options.length === 1){
      optionButtons = (
        <div className='toggle-group'>
          <button type='button' className="toggle-btn hot active">
            {product.options[0]}
          </button>
        </div>
      );
    }else{
      optionButtons = (
        <div></div>
      )
    }

 //console.log(product.options.length);
  return (
        <div className="option-container">  
         <div className='option-label'>
            {optionButtons}
            <div className='cart-footer'>
                <button type='button' className='btn btn-primary btn-block' onClick={() => { addItem(product); handleOpen(); onClose();}}>담기</button>
            </div>
          </div>  
           <SlideCart isOpen={isOpen} onClose={handleClose} product={product}/>
        </div>
  );
};

