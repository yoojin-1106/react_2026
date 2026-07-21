import { useCart } from "../hooks/useCart";
import type { CartItem } from "../types";
import { formatPrice } from "../lib/format";

interface CartItemProps{
    item : CartItem
}


export default function CartItemRow({item} : CartItemProps){
    const { setQuantity, removeItem } = useCart();
    const { menuItem, quantity, option } = item;

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(menuItem.id, quantity - 1);
        } else {
        removeItem(menuItem.id);
        }
    };

    const handleIncrement = () => {
        setQuantity(menuItem.id, quantity + 1);
    };

    const isMaxQuantity = menuItem.stock !== undefined && quantity >= menuItem.stock;

    return (
       

    <div className="cart-item-row">
     
      <div className="cart-item-left">
        <img className="thumb" src={menuItem.image} alt={menuItem.name} />
        <div className="cart-item-info">
          <div className="cart-item-name">{menuItem.name}</div>
          {option && (
            <span className={`cart-item-option ${option.toLowerCase()}`}>{option}</span>
          )}
          <div className="cart-item-price">{formatPrice(menuItem.price)}</div>
        </div>
      </div>

    
      <div className="quantity-control">
        <button type="button" className="quantity-btn" onClick={handleDecrement} aria-label="수량 감소" >  - </button>
        <span className="quantity-value">{quantity}</span>
        <button type="button" className="quantity-btn" onClick={handleIncrement} disabled={isMaxQuantity} aria-label="수량 증가" >  +  </button>
      </div>

      
      <div className="cart-item-right">
        <div className="line-total">{formatPrice(menuItem.price * quantity)}</div>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeItem(menuItem.id)}
          aria-label="아이템 삭제"
        >
          &times;
        </button>
      </div>
    </div>
     
    )
}