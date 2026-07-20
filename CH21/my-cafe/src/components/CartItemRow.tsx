import { useCart } from "../hooks/useCart";
import type { CartItem } from "../types";
import { formatPrice } from "../lib/format";

interface CartItemProps{
    item : CartItem
    onClose: () => void;
}


export default function CartItemRow({item, onClose} : CartItemProps){
    const {setQuantity, removeItem} = useCart();
    const {menuItem, quantity} = item;
    //const addOddItemLogig = setQuantity(product.id, quantity - 1);

    return (
        <div className="ccart-list">
             <img className="thumb" src={menuItem.image} alt={menuItem.name}/>
            <div className="info">
                <div className="product-name">{menuItem.name}</div>
                <div className="product-price">{menuItem.price}</div>
            </div>

            <div className="quantity-control">
                <button 
                    type="button"
                    className="quantity-btn" 
                    onClick={() => {
                            if (quantity > 1) {
                                setQuantity(menuItem.id, quantity - 1);
                            } else {
                                removeItem(menuItem.id);
                                onClose();
                            }
                        }}
                > - </button>
                <span>{quantity}</span>
                <button type="button" className="quantity-btn " onClick={() => setQuantity(menuItem.id, quantity + 1)} disabled={quantity >= menuItem.stock}> + </button>
            </div>
            <div className="line-total">{formatPrice(menuItem.price * quantity)}</div>
            
        </div>
    )
}