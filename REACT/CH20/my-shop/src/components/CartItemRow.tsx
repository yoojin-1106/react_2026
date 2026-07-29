import { useCart } from "../hooks/useCart";
import type { CartItem } from "../types";
import { formatPrice } from "../lib/format";

interface CartItemProps{
    item : CartItem
}


export default function CartItemRow({item} : CartItemProps){
    const {setQuantity, removeItem} = useCart();
    const {product, quantity} = item;
    //const addOddItemLogig = setQuantity(product.id, quantity - 1);

    return (
        <div className="cart-row">
            <img className="thumb" src={product.image} alt={product.name}/>
            <div className="info">
                <div className="p-name">{product.name}</div>
                <div className="p-price">{product.price}</div>
            </div>

            <div className="qty">
                <button type="button" className="" onClick={() => setQuantity(product.id, quantity - 1)} disabled={quantity <= 1}> - </button>
                <span>{quantity}</span>
                <button type="button" className="" onClick={() => setQuantity(product.id, quantity + 1)} disabled={quantity >= product.stock}> + </button>
            </div>
            <div className="line-total">{formatPrice(product.price * quantity)}</div>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => removeItem(product.id)}>삭제</button>
        </div>
    )
}