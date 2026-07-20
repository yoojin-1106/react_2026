import { useCart } from "../hooks/useCart";
import type { CartItem } from "../types";
import { formatPrice } from "../lib/format";

interface CartItemProps{
    item : CartItem
}


export default function CartItemRow({item} : CartItemProps){
    const {setQuantity, removeItem} = useCart();
    const {menuItem, quantity} = item;
    //const addOddItemLogig = setQuantity(product.id, quantity - 1);

    return (
        <div className="cart-row">
            
            <div className="info">
                <div className="product-name">{menuItem.name}</div>
                <div className="product-price">{menuItem.price}</div>
            </div>

            <div className="qty">
                <button type="button" className="" onClick={() => setQuantity(menuItem.id, quantity - 1)} disabled={quantity <= 1}> - </button>
                <span>{quantity}</span>
                <button type="button" className="" onClick={() => setQuantity(menuItem.id, quantity + 1)} disabled={quantity >= menuItem.stock}> + </button>
            </div>
            <div className="line-total">{formatPrice(menuItem.price * quantity)}</div>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => removeItem(menuItem.id)}>삭제</button>
        </div>
    )
}