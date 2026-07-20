import type { MenuItem } from '../types';

interface MenuOptionProps {
  product : MenuItem
}

export default function MenuOption({ product } : MenuOptionProps) {


 //console.log(product.options.length);
  return (
        <div className="option-container">  
         <div className='option-label'>
          
            { product.options.length > 1 ?
            (
              <div className='toggle-group'>
                <button type='button' className="toggle-btn hot" onClick={() => {}}>{product.options[0]}</button>
                <button type='button' className="toggle-btn ice" onClick={() => {}}>{product.options[1]}</button>       
              </div> 
            )
            :
           (
            <div className='toggle-group'>
              <button type='button' className="toggle-btn">{product.options[0]}</button>
            </div>  
           ) 

            }
            <div className='cart-footer'>
                <button type='button' className='btn btn-primary btn-block'>담기</button>
            </div>
          </div>  
        </div>
  );
};

