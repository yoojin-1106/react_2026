import type { MenuItem } from '../types';
import { useCart } from "../hooks/useCart";
import SlideCart from './SlideCart';
import { useState } from 'react';


interface MenuOptionProps {
  product : MenuItem
  onClose: () => void;
}

function getButtonClass(isActive: boolean): string {
  const classes = ["toggle-btn hot"];
  console.log(isActive);
  if (isActive) classes.push("active");
  return classes.join(" "); // 예: "option-btn active hot"
}

function getButtonIceClass(isIceActive: boolean): string {
  const classes = ["toggle-btn ice"];
  if (isIceActive) classes.push("active");
  return classes.join(" "); // 예: "option-btn active hot"
}

export default function MenuOption({ product, onClose } : MenuOptionProps) {

    const { addItem, setQuantity } = useCart(); 
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isIceActive, setIsIceActive] = useState<boolean>(false);


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
          <button type='button' className={getButtonClass(isActive)} id="hot_btn" onClick={() => {setIsIceActive(isIceActive); setIsActive(!isActive);}}>
            {product.options[0]}
          </button>
          <button type='button' className={getButtonIceClass(isIceActive)} id="ice_btn" onClick={() => {setIsIceActive(!isIceActive); setIsActive(isActive);}}>
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
        <div>총 {product.stock}개 남았습니다.</div>
      )
    }


 //console.log(product.options.length);
  return (
        <div className="option-container">  
         <div className='option-label'>
            {optionButtons}
            <div className='cart-footer'>
                <button type='button' className='btn btn-primary btn-block' onClick={() => { addItem(product); handleOpen(); onClose();  }}>담기</button>
            </div>
          </div>  
           <SlideCart isOpen={isOpen} onClose={handleClose} product={product}/>
        </div>
  );
};

